"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.clientes.listar({ limit: 1 }, function (resultado) {
    console.log(resultado);
});
