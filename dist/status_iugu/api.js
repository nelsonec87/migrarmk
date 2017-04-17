"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Iugu = (function () {
    function Iugu(API_KEY) {
        this.API_KEY = API_KEY;
        this.clientes = new _1.Clientes(API_KEY);
    }
    return Iugu;
}());
exports.Iugu = Iugu;
