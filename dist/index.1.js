"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.clientes.criar({
    "email": "cliente9@statussistemas.com.br",
    "name": "cliente 9",
    "cpf_cnpj": "00944031986",
    "custom_variables": [{ "name": "ip", "value": "192.168.254.254" }]
}, function (cli) {
    console.log(cli);
});
