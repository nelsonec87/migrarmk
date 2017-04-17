"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.assinaturas.excluir('A2F2A8DC86F74188A09C1D46CAAB7FBD', function () { });
