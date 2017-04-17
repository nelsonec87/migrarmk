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
    api.clientes.criar(novos[0], function (r) {
        console.log(r.id);
    });
});
connection.end();
