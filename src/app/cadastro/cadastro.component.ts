import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Ong } from '../ong';
import { OngService } from '../ong.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  sucesso: any
  erro: any
  incompleto: any

  ong: Ong;
  
  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cnpj: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    site: new FormControl(''),
    endereco: new FormControl(''),
    numero: new FormControl(''),
    cep: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    pais: new FormControl(''),
    descricao: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private ongService: OngService) {
    this.ong = new Ong();
  }

  ngOnInit(): void {
    this.sucesso = true;
    this.erro = true;
    this.incompleto = true;
  }
  
  onSubmit(){
    this.ong = JSON.parse(JSON.stringify(this.form.value));
    this.ongService.saveOng(this.ong).subscribe((ong: Ong) => {
      this.ong = ong;
      this.sucesso = false;
      console.log(this.ong.nome);
    });
  }
}
