"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var async = require("async");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.clientes.listar({}, function (lista) {
    async.eachSeries(lista.items, function (ass, cb) {
        api.clientes.excluir(ass.id, function () { console.log(ass.id); cb(); });
    });
});
