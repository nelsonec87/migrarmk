"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assinaturas = (function () {
    function Assinaturas(api) {
        this.api = api;
    }
    Assinaturas.prototype.listar = function (cb) {
        this.api.subscriptions.list(cb);
    };
    return Assinaturas;
}());
exports.Assinaturas = Assinaturas;
