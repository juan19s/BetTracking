import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class PruebaapiService {

  private url = 'https://api-football-v1.p.rapidapi.com/v3/teams?id=2286';


  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<any> {
    const apiKey = environment.apiKey; // Accede a la clave API desde el objeto environment
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey
    });

    return this.http.get<any>(this.url, { headers });
  }
}
