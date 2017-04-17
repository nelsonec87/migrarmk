"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
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
connection.query('SELECT * from sis_cliente', function (error, results, fields) {
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
            { name: 'celular', value: a.celular },
            { name: 'vencimento', value: a.venc },
            { name: 'grupo', value: a.grupo },
        ]
    }); });
    var cli = novos[0];
    var plano = cli.plano;
    delete cli.plano;
    api.clientes.criar(cli, function (r) {
        var ass = {
            plan_identifier: PLANOS[plano],
            customer_id: r.id,
            expire_at: '2017-04-25'
        };
        console.log(ass);
        api.assinaturas.criar(ass, function (r) { console.log(r); });
    });
    connection.end();
});
