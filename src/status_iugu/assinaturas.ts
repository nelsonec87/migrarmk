import rest = require('unirest');

export class Assinaturas {

    private url = 'https://api.iugu.com/v1/subscriptions/';

    constructor(private API_KEY: string) { }

    // listar(options, cb: (lista: { totalItems: number, items: IAssinatura[] }) => void) {
    //     rest.get(this.url)
    //         .auth({ user: this.API_KEY })
    //         .send(options)
    //         .end(resp => cb(resp.body));

    // }
    excluir(id, cb: (resp) => void) {
        rest.delete(this.url + id)
            .auth({ user: this.API_KEY })
            .end(resp => cb(resp.body));

    }

    criar(assinatura: IAssinatura, cb) {
        rest.post(this.url)
            .auth({ user: this.API_KEY })
            .type('json').send(JSON.stringify(assinatura))
            .end(resp => cb(resp.body));
    }
    // alterar(id, cliente: IAssinatura, cb) {
    //     //validar dados
    //     rest.put(this.url + id)
    //         .auth({ user: this.API_KEY })
    //         .type('json').send(JSON.stringify(cliente))
    //         .end(resp => cb(resp.body));
    // }
    // findById(id, cb) {
    //     rest.get(this.url + id)
    //         .auth({ user: this.API_KEY })
    //         .end(resp => cb(resp.body));
    // }

}

interface IAssinaturaList {
    facets: { [key: string]: IAssinaturaListFacet }
    totalItems: number
    items: IAssinatura[]
}

interface IAssinaturaListFacet {
    _type: string,
    count: number
}

export interface IAssinatura {
    id?: string,
    suspended?: boolean,
    plan_identifier?: string,
    price_cents?: number,
    currency?: string,
    features?: {},
    expires_at?: string,
    created_at?: string,
    updated_at?: string,
    customer_name?: string,
    customer_email?: string,
    cycled_at?: string,
    credits_min?: number,
    credits_cycle?: string,
    payable_with?: string,
    customer_id?: string,
    plan_name?: string,
    customer_ref?: string,
    plan_ref?: string,
    active?: boolean
    in_trial?: string,
    credits?: string,
    credits_based?: boolean,
    recent_invoices?: any,
    subitems?: any[],
    logs?: any[],
    custom_variables?: any[]
}



