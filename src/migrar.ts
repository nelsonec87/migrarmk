import mysql = require('mysql');
import async = require('async');
import { Iugu } from './status_iugu';

let api = new Iugu('8044757e9f5d418a2f33e32c77d74270');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vertrigo',
    database: 'mkradius'
});

connection.connect();

let PLANOS = {
    '1_Mega': '1_Mega',
    '2_Mega': '2_Mega',
    '2_Mega_59_90': '2_Mega_59_90',
    '2_Mega_69_90': '2_Mega_69_90',
    '3_Mega': '3_Mega',
    '4_Mega': '4_Mega',
    '4_MB_119': '4_Mega',
    '5_Mega': '5_Mega',
};

connection.query('SELECT * from sis_cliente where cli_ativado = \'s\'', function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0]);
    var novos = results.map(a => ({
        plano: a.plano,
        email: a.email + '.teste',
        name: a.nome,
        cpf_cnpj: a.cpf_cnpj,
        street: a.endereco,
        complement: a.complemento,
        custom_variables: [
            { name: 'vencimento', value: a.venc },
            { name: 'celular', value: a.celular },
            { name: 'grupo', value: a.grupo },
        ]
    }));


    async.eachSeries(novos, (cli, cb) => {
        // let cli = novos[0];
        let plano = cli.plano;
        delete cli.plano;
        api.clientes.criar(cli, (r) => {
            // console.log(r);
            let ass = {
                plan_identifier: PLANOS[plano],
                customer_id: r.id,
                expires_at: '2017-05-' + cli.custom_variables[0].value
            };
            console.log(ass)

            api.assinaturas.criar(ass, (r) => {
                console.log(r);
                cb();
            });
        })
    });

    connection.end();

});
// api.clientes.criar({
//     "email": "cliente9@statussistemas.com.br",
//     "name": "cliente 9",
//     "cpf_cnpj": "00944031986",
//     "custom_variables": [{ "name": "ip", "value": "192.168.254.254" }]
// }, (cli) => {
//     console.log(cli);
// })

