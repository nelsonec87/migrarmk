import { Iugu } from './status_iugu';
import async = require('async');


let api = new Iugu('8044757e9f5d418a2f33e32c77d74270');



// api.clientes.listar({}, resultado => {
//     console.log(resultado);
//     for (let i in resultado.items)
//         api.clientes.excluir(resultado.items[i].id, (r) => { console.log(r) });
// });

// api.assinaturas.listar((err, resultado) => {
//     console.log(resultado);
// });

// api.faturas.listar({ customer_id: 'E0A7D8B2AA6040E08A217523023AD46C' }, (err, resultado) => {
//     console.log(resultado);
// });

// api.clientes.criar({
//     "email": "cliente9@statussistemas.com.br",
//     "name": "cliente 9",
//     "cpf_cnpj": "00944031986",
//     "custom_variables": [{ "name": "ip", "value": "192.168.254.254" }]
// }, (cli) => {
//     console.log(cli);
// })

// api.clientes.alterar( '5DA9597BE224498989D9A0568F5511BF' , {  }, (err, cli) => {
//     console.log(err, cli);
// })

// api.clientes.findById('13DFBF8583E3483B9CAA1BE85F789853', (cli) => {
//     console.log(cli);
// })

// api.clientes.teste();

// api.assinaturas.criar({
//     plan_identifier: '1mb',
//     customer_id: 'E0A7D8B2AA6040E08A217523023AD46C',
// }, (r) => { console.log(r) });



// api.assinaturas.listar({}, (lista) => {
//     async.eachSeries(lista.items, (ass, cb) => {
//         api.assinaturas.excluir(ass.id, () => { console.log(ass.id); cb(); })
//     })
// })

api.clientes.listar({}, (lista) => {
    async.eachSeries(lista.items, (ass, cb) => {
        api.clientes.excluir(ass.id, () => { console.log(ass.id); cb(); })
    })
})