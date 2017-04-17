declare function Iugu(api_key: string): any;
declare namespace Iugu {
    // interface cb { ( cb: (err: Error, result: any) => void): any }
    interface cb { (...params): any }
    interface IAccounts {
        retrieve: cb;
        request_verification: cb;
        request_withdraw: cb;
    }
    interface ICharge {
        create: cb;
    }
    interface ICustomer {
        create: cb;
        list: cb;
        retrieve: cb;
        update: cb;
        del: cb;
        createPaymentMethod: cb;
        listPaymentMethod: cb;
        retrievePaymentMethod: cb;
        updatePaymentMethod: cb;
        deletePaymentMethod: cb;
    }
    interface IPlans {
        create: cb;
        list: cb;
        retrieve: cb;
        update: cb;
        del: cb;
        retrieveByIdentifier: cb;
    }
    interface IPlans {
        create: cb;
        list: cb;
        retrieve: cb;
        update: cb;
        del: cb;
        retrieveByIdentifier: cb;
    }
    interface ISubscriptions {
        create: cb;
        list: cb;
        retrieve: cb;
        update: cb;
        del: cb;
        suspend: cb;
        activate: cb;
        change_plan: cb;
        add_credits: cb;
        remove_credits: cb;
    }
    interface IInvoices {
        create: cb;
        list: cb;
        retrieve: cb;
        update: cb;
        del: cb;
        cancel: cb;
        refund: cb;
    }
    interface IIugu {
        setTimeout: (ms: number) => void;

        accounts: IAccounts,
        charge: ICharge,
        customers: ICustomer,
        invoices: IInvoices,
        marketplace,
        plans: IPlans,
        subscriptions: ISubscriptions,
        paymenttoken,
        transfers,
    }
}
declare module 'iugu' {
    function a(api_key: string): Iugu.IIugu;
    export = a;
}


