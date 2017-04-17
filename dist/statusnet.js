"use strict";
var iugu = require("iugu");
var StatusNET;
(function (StatusNET) {
    var API = (function () {
        function API(API_KEY) {
            this.iugu = iugu(API_KEY);
            this.iugu.setTimeout(20000);
            this.clientes = new Clientes(this.iugu);
        }
        return API;
    }());
    StatusNET.API = API;
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
})(StatusNET || (StatusNET = {}));
module.exports = StatusNET;
