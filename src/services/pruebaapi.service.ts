import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class PruebaapiService {

  private url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';


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

  public getTimeZone(): Observable<any> {
    const apiKey = environment.apiKey; // Accede a la clave API desde el objeto environment
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey
    });

    return this.http.get<any>(this.url, { headers });
  }

  public getDataByPais(pais: string, teams: string): Observable<any> {
    const apiKey = environment.apiKey;
    const params = new HttpParams().set('country', pais); // Agrega los parámetros a la URL
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey
    });

    return this.http.get<any>(this.url + teams, { headers, params }); // Agrega los parámetros a la petición
  }

  public getFixturesByLeagueId(id: number, season: number): Observable<any> {
    const apiKey = environment.apiKey;
    const params = new HttpParams().set('league', id).set('season', season); // Agrega los parámetros a la URL
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey
    });

    return this.http.get<any>(this.url, { headers, params }); // Agrega los parámetros a la petición
  }

  public getStandingsByLeagueId(id: number, season: number): Observable<any> {
    const apiKey = environment.apiKey;
    const params = new HttpParams().set('league', id).set('season', season); // Agrega los parámetros a la URL
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey
    });

    return this.http.get<any>(this.url, { headers, params }); // Agrega los parámetros a la petición
  }
}
