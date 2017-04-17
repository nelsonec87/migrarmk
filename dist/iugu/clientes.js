"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clientes = (function () {
    function Clientes(api) {
        this.api = api;
    }
    Clientes.prototype.listar = function (cb) {
        this.api.customers.list(cb);
    };
    Clientes.prototype.criar = function (cliente, cb) {
        this.api.customers.create(cliente, cb);
    };
    return Clientes;
}());
exports.Clientes = Clientes;
