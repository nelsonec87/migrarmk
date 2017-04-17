"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var status_iugu_1 = require("./status_iugu");
var api = new status_iugu_1.Iugu('8044757e9f5d418a2f33e32c77d74270');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vertrigo',
    database: 'mkradius'
});
connection.connect();
connection.query('SELECT * from sis_cliente', function (error, results, fields) {
    if (error)
        throw error;
    console.log('The solution is: ', results[0]);
});
connection.end();
