"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iugu = require("iugu");
var _1 = require("./");
var API = (function () {
    function API(API_KEY) {
        this.iugu = iugu(API_KEY);
        this.iugu.setTimeout(20000);
        this.clientes = new _1.Clientes(this.iugu);
        this.assinaturas = new _1.Assinaturas(this.iugu);
    }
    return API;
}());
exports.API = API;
