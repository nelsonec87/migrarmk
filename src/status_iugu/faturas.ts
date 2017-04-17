import iugu = require('iugu');

export class Faturas {
    constructor(private api: Iugu.IIugu) { }

    listar(filtro: IFaturaListFiltro, cb: (err, lista: IFaturaList) => void) {
        this.api.invoices.list(filtro, cb);
    }

}

interface IFaturaListFiltro {
    limit?
    start?
    created_at_from?
    created_at_to?
    due_date?
    query?
    updated_since?
    sortBy?: { [key: string]: ('ASC' | 'DESC') }
    customer_id?
}

interface IFaturaList {
    facets: { [key: string]: IFaturaListFacet, status: IFaturaListFacetStatus }
    totalItems: number
    items: IFatura[]
}

interface IFaturaListFacet {
    _type: string,
    count: number
}
interface IFaturaListFacetStatus extends IFaturaListFacet {
    missing: number
    total: number
    other: number
    terms: any[]
}

export interface IFatura {
    id,
    due_date,
    currency,
    discount_cents,
    email,
    notification_url,
    return_url,
    status,
    tax_cents,
    updated_at,
    total_cents,
    total_paid_cents,
    paid_at,
    taxes_paid_cents,
    paid_cents,
    cc_emails,
    payable_with,
    overpaid_cents,
    ignore_due_email,
    ignore_canceled_email,
    advance_fee_cents,
    commission_cents,
    secure_id,
    secure_url,
    customer_id,
    customer_ref,
    customer_name,
    user_id,
    total,
    taxes_paid,
    total_paid,
    total_overpaid,
    commission,
    fines_on_occurrence_day,
    total_on_occurrence_day,
    fines_on_occurrence_day_cents,
    total_on_occurrence_day_cents,
    financial_return_date,
    advance_fee,
    paid,
    interest,
    discount,
    created_at,
    refundable,
    installments,
    transaction_number,
    payment_method,
    created_at_iso,
    updated_at_iso,
    financial_return_dates,
    bank_slip,
    items,
    variables,
    custom_variables,
    logs,
}



