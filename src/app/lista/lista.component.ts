import { Component, OnInit } from '@angular/core';
import { Ong } from '../ong';
import { OngService } from '../ong.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  vazio: any
  erro: any
  ongs: Ong[];
  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  });

  constructor(private ongService: OngService) {
    this.ongs = new Array<Ong>();
    this.erro = true;
    this.vazio = true;
  }

  ngOnInit(): void {
    this.ongService.getOngsHome().subscribe((ongs: Ong[]) => {
      this.ongs = ongs;
    });
  }

  onSubmit(){
    let nomeECidade = JSON.parse(JSON.stringify(this.form.value));
    this.ongService.getOngs(nomeECidade.nome, nomeECidade.cidade).subscribe((ongs: Ong[]) => {
      this.ongs = ongs;
      if(this.ongs.length < 1) this.vazio = false;
      this.erro = true;
      console.log(this.ongs);
    });
  }

}
