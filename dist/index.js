"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.clientes.listar({}, function (resultado) {
    console.log(resultado);
    for (var i in resultado.items)
        api.clientes.excluir(resultado.items[i].id, function (r) { console.log(r); });
});
