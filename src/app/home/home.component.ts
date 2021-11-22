import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Ong } from '../ong';
import { OngService } from '../ong.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ongs: any;

  constructor(private ongService: OngService) {}

  ngOnInit(): void {
    this.ongService.getOngsHome().subscribe((ongs: Ong[]) => {
      this.ongs = ongs;
    });
  }

  

}
