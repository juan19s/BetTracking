import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private apiBaseUrl = 'http://localhost:4000'; // Cambia esto a la URL base de tu API

  constructor(
    private http: HttpClient
  ) { }

  insertLeague(leagueData: any) {
    return this.http.post(`${this.apiBaseUrl}/api/leagues/insert`, leagueData);
  }

  insertTeam(teamData: any) {
    return this.http.post(`${this.apiBaseUrl}/api/leagues/insertTeam`, teamData);
  }

  insertTimeZone(time: any) {
    return this.http.post(`${this.apiBaseUrl}/api/leagues/insertTimeZone`, time);
  }

  insertNose(nose: any) {
    return this.http.post(`${this.apiBaseUrl}/api/leagues/insertNose`, nose);
  }

  getLeagues() {
    return this.http.get(`${this.apiBaseUrl}/api/leagues/getLeagues`);
  }

  getNose() {
    return this.http.get(`${this.apiBaseUrl}/api/leagues/nose`);
  }

  getTeams() {
    return this.http.get(`${this.apiBaseUrl}/api/leagues/getTeams`);
  }

  getTeamsByCountry(country: string) {
    const params = new HttpParams().set('country', country); // Agregar el parámetro 'country'
    return this.http.get(`${this.apiBaseUrl}/api/leagues/getTeamsByCountry`, { params });
  }
}
