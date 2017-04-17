"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var async = require("async");
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vertrigo',
    database: 'mkradius'
});
connection.connect();
var PLANOS = {
    '1_Mega': '1_Mega',
    '2_Mega': '2_Mega',
    '2_Mega_59_90': '2_Mega_59_90',
    '2_Mega_69_90': '2_Mega_69_90',
    '3_Mega': '3_Mega',
    '4_Mega': '4_Mega',
    '4_MB_119': '4_Mega',
    '5_Mega': '5_Mega',
};
connection.query('SELECT * from sis_cliente where cli_ativado = \'s\'', function (error, results, fields) {
    if (error)
        throw error;
    var novos = results.map(function (a) { return ({
        plano: a.plano,
        email: a.email + '.teste',
        name: a.nome,
        cpf_cnpj: a.cpf_cnpj,
        street: a.endereco,
        complement: a.complemento,
        custom_variables: [
            { name: 'vencimento', value: a.venc },
            { name: 'celular', value: a.celular },
            { name: 'grupo', value: a.grupo },
        ]
    }); });
    async.eachLimit(novos, 2, function (cli, cb) {
        var plano = cli.plano;
        delete cli.plano;
        api.clientes.criar(cli, function (r) {
            var ass = {
                plan_identifier: PLANOS[plano],
                customer_id: r.id,
                expires_at: '2017-05-' + cli.custom_variables[0].value
            };
            console.log(ass);
            api.assinaturas.criar(ass, function (r) {
                cb();
            });
        });
    });
    connection.end();
});
