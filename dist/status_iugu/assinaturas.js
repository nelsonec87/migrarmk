"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest = require("unirest");
var Assinaturas = (function () {
    function Assinaturas(API_KEY) {
        this.API_KEY = API_KEY;
        this.url = 'https://api.iugu.com/v1/subscriptions/';
    }
    Assinaturas.prototype.listar = function (options, cb) {
        rest.get(this.url)
            .auth({ user: this.API_KEY })
            .send(options)
            .end(function (resp) { return cb(resp.body); });
    };
    Assinaturas.prototype.excluir = function (id, cb) {
        rest.delete(this.url + id)
            .auth({ user: this.API_KEY })
            .end(function (resp) { return cb(resp.body); });
    };
    Assinaturas.prototype.criar = function (assinatura, cb) {
        rest.post(this.url)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(assinatura))
            .end(function (resp) { return cb(resp.body); });
    };
    return Assinaturas;
}());
exports.Assinaturas = Assinaturas;
