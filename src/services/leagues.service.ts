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

  insertMatch(match: any) {
    return this.http.post(`${this.apiBaseUrl}/api/leagues/insertMatch`, match);
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

  getTeamsByLeaugeId(league_id: number) {
    const params = new HttpParams().set('league_id', league_id); // Agregar el parámetro 'country'
    return this.http.get(`${this.apiBaseUrl}/api/leagues/getTeamsByLeagueId`, { params });
  }

  getLeagueById(league_id: number) {
    const params = new HttpParams().set('league_id', league_id); // Agregar el parámetro 'country'
    return this.http.get(`${this.apiBaseUrl}/api/leagues/getLeagueById`, { params });
  }

  updateTeamLeague(team_id: number, league_id: number) {
    const url = `${this.apiBaseUrl}/api/leagues/updateTeamLeague`;

    // Aquí se envía la solicitud PUT con los datos necesarios
    return this.http.put(url, { team_id: team_id, league_id: league_id });
  }

  updateStandings(team_id: number, updateData: {}) {
    const url = `${this.apiBaseUrl}/api/leagues/updateStandings`;

    // Combinar team_id con los datos de actualización
    const requestData = { team_id: team_id, ...updateData };

    // Enviar la solicitud PUT con los datos necesarios
    return this.http.put(url, requestData);
  }

}
