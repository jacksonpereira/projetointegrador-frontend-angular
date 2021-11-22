import { Component, OnInit } from '@angular/core';
import { Ong } from '../ong';
import { OngService } from '../ong.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ongs: any;

  constructor(private ongService: OngService) {}

  ngOnInit(): void {
    this.ongService.getOngsHome().subscribe((ongs: Ong[]) => {
      this.ongs = ongs;
    });
  }

}
