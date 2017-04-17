import rest = require('unirest');

export class Clientes {

    private url = 'https://api.iugu.com/v1/customers/';

    constructor(private API_KEY: string) { }

    listar(options, cb: (lista: { totalItems: number, items: ICliente[] }) => void) {
        rest.get(this.url)
            .auth({ user: this.API_KEY })
            .send(options)
            .end(resp => cb(resp.body));

    }
    excluir(id, cb: (resp) => void) {
        rest.delete(this.url + id)
            .auth({ user: this.API_KEY })
            .end(resp => cb(resp.body));

    }

    criar(cliente: ICliente, cb) {
        //validar dados
        //ver se ja existe
        rest.post(this.url)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(cliente))
            .end(resp => cb(resp.body));
    }
    alterar(id, cliente: ICliente, cb) {
        //validar dados
        rest.put(this.url + id)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(cliente))
            .end(resp => cb(resp.body));
    }
    findById(id, cb) {
        rest.get(this.url + id)
            .auth({ user: this.API_KEY })
            .end(resp => cb(resp.body));
    }

}

export interface ICliente {
    id?: string;
    name: string;
    email: string;
    cpf_cnpj: string;
    cc_emails?: string;
    notes?: string;
    custom_variables?: any[];
    zip_code?: string,
    number?: string,
    complement?: string,
    default_payment_method_id?: string,
    proxy_payments_from_customer_id?: string,
    city?: string,
    state?: string,
    district?: string,
    street?: string,
}



