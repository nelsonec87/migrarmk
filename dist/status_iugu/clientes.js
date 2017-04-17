"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest = require("unirest");
var Clientes = (function () {
    function Clientes(API_KEY) {
        this.API_KEY = API_KEY;
        this.url = 'https://api.iugu.com/v1/customers/';
    }
    Clientes.prototype.listar = function (options, cb) {
        rest.get(this.url)
            .auth({ user: this.API_KEY })
            .send(options)
            .end(function (resp) { cb(resp.body); });
    };
    Clientes.prototype.excluir = function (id, cb) {
        rest.delete(this.url + id)
            .auth({ user: this.API_KEY })
            .end(function (resp) { return cb(resp.body); });
    };
    Clientes.prototype.criar = function (cliente, cb) {
        rest.post(this.url)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(cliente))
            .end(function (resp) { return cb(resp.body); });
    };
    Clientes.prototype.alterar = function (id, cliente, cb) {
        rest.put(this.url + id)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(cliente))
            .end(function (resp) { return cb(resp.body); });
    };
    Clientes.prototype.findById = function (id, cb) {
        rest.get(this.url + id)
            .auth({ user: this.API_KEY })
            .end(function (resp) { return cb(resp.body); });
    };
    return Clientes;
}());
exports.Clientes = Clientes;
