import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaapiService {

  private url = 'https://api-football-v1.p.rapidapi.com/v3/teams?id=2286';
  private apiKey = '8de4bc925cmsh0306e4c16be65abp1563cfjsnc2a6f0eadb7a';


  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      // 'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    });

    return this.http.get<any>(this.url, { headers });
  }
}
