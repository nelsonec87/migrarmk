"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Faturas = (function () {
    function Faturas(api) {
        this.api = api;
    }
    Faturas.prototype.listar = function (filtro, cb) {
        this.api.invoices.list(filtro, cb);
    };
    return Faturas;
}());
exports.Faturas = Faturas;
