"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.assinaturas.excluir('F8ED69F898A046D4AE581F8DDB650F64', function () { });
