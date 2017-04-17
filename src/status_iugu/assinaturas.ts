import iugu = require('iugu');

export class Assinaturas {
    constructor(private api: Iugu.IIugu) { }

    listar(cb: (err, lista: IAssinaturaList) => void) {
        this.api.subscriptions.list(cb);
    }

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



