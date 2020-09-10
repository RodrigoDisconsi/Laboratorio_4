import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://restcountries.eu/rest/v2/

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  public usuario;

  constructor(private http: HttpClient) { }

  public obtenerDatos(){
    return this.http.get('https://api.mocki.io/v1/570c5e5c');
  }
}
