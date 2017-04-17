import { Iugu } from './status_iugu';

let api = new Iugu('8044757e9f5d418a2f33e32c77d74270');


// api.clientes.listar({ limit: 1 }, resultado => {
//     console.log(resultado);
// });

// api.assinaturas.listar((err, resultado) => {
//     console.log(resultado);
// });

// api.faturas.listar({ customer_id: 'E0A7D8B2AA6040E08A217523023AD46C' }, (err, resultado) => {
//     console.log(resultado);
// });

api.clientes.criar({
    "email": "cliente9@statussistemas.com.br",
    "name": "cliente 9",
    "cpf_cnpj": "00944031986",
    "custom_variables": [{ "name": "ip", "value": "192.168.254.254" }]
}, (cli) => {
    console.log(cli);
})

// api.clientes.alterar( '5DA9597BE224498989D9A0568F5511BF' , {  }, (err, cli) => {
//     console.log(err, cli);
// })

// api.clientes.findById('13DFBF8583E3483B9CAA1BE85F789853', (cli) => {
//     console.log(cli);
// })

// api.clientes.teste();
