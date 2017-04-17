import iugu = require('iugu');
import { Clientes, Assinaturas } from './';

export class Iugu {

    public clientes: Clientes;
    public assinaturas: Assinaturas;
    // public faturas: Faturas;

    constructor(private API_KEY: string) {
        this.clientes = new Clientes(API_KEY);
        this.assinaturas = new Assinaturas(this.API_KEY);
        // this.faturas = new Faturas(this.iugu);
    }


}

