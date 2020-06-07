import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadslines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ){

    query = apiUrl + query;

    return this.http.get<T>(query, {headers});

  }

  getTopHeadslines(){
    return this.ejecutarQuery<RespuestaTopHeadslines>(`/top-headlines?country=mx`);
    // Esta respuesta es de tipo <RespuestaTopHeadslines> que se encuentra definida en el archivo /interfaces/interface.ts
    // tslint:disable-next-line: max-line-length
    // return this.http.get<RespuestaTopHeadslines>(`http://newsapi.org/v2/top-headlines?country=mx&apiKey=0f2932567d0c46db8c16f215bf7f4981`);
  }

  getTopHeadlinesCategory( categoria: string ){
    // return this.http.get(`http://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=0f2932567d0c46db8c16f215bf7f4981`);

    return this.ejecutarQuery<RespuestaTopHeadslines>(`/top-headlines?country=mx&category=${categoria}`);
  }
}
