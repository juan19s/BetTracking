import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private apiBaseUrl = 'http://localhost:4000'; // Cambia esto a la URL base de tu API

  constructor(
    private http: HttpClient
  ) { }

  getMatchesByDate(date: any) {
    const params = new HttpParams().set('date', date); // Agregar el parámetro 'country'

    return this.http.get(`${this.apiBaseUrl}/api/matches/getMatchesByDate`, { params });
  }
}
