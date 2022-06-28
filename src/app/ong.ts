import { Contato } from "./contato";
import { DadosBancarios } from './dadosBancarios';

export class Ong {

    id?: number;
    nome?: string;
    endereco?: string;
    numero?: string;
    cep?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    pais?: string;
    contato: Contato;
    cnpj?: string;
    dadosBancarios: DadosBancarios;
    descricao?: string;

    constructor(){
        this.contato = new Contato();
        this.dadosBancarios = new DadosBancarios;
    }
}
