import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Ong } from './ong';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  url = 'https://projetointegrador1-api.herokuapp.com/';

  ongs = [] as any;
  constructor(private httpClient: HttpClient) { }

  getOngs(nome:  string, cidade: string): Observable<Ong[]> {
    return this.httpClient.get<Ong[]>(`${this.url}search?nome=${nome}&cidade=${cidade}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getOngsHome(): Observable<Ong[]> {
    return this.httpClient.get<Ong[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  saveOng(ong: Ong): Observable<Ong> {
    return this.httpClient.post<Ong>(this.url, ong)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
