import mysql = require('mysql');
import { Iugu } from './status_iugu';

let api = new Iugu('8044757e9f5d418a2f33e32c77d74270');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 2000,
    user: 'root',
    password: 'vertrigo',
    database: 'mkradius'
});

connection.connect();

connection.query('SELECT * from sis_cliente', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
    // var novos = results.map(a => ({
    //     email: a.email,
    //     name: a.nome,
    //     cpf_cnpj: a.cpf_cnpj,
    //     street: a.endereco,
    //     complement: a.complemento,
    //     custom_variables: [
    //         { name: 'celular', value: a.celular },
    //         { name: 'vencimento', value: a.venc },
    //         { name: 'grupo', value: a.grupo },
    //     ]
    // }));

    // console.log(novos[0])
});

connection.end();

// api.clientes.criar({
//     "email": "cliente9@statussistemas.com.br",
//     "name": "cliente 9",
//     "cpf_cnpj": "00944031986",
//     "custom_variables": [{ "name": "ip", "value": "192.168.254.254" }]
// }, (cli) => {
//     console.log(cli);
// })

