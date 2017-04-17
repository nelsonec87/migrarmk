"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
api.assinaturas.criar({
    plan_identifier: '1mb',
    customer_id: 'E0A7D8B2AA6040E08A217523023AD46C',
}, function (r) { console.log(r); });
