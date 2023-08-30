import { Component } from '@angular/core';
import { LeaguesService } from 'src/services/leagues.service';
import { PruebaapiService } from 'src/services/pruebaapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  responseData: any;
  teams: any;
  league: any;
  league_icon: string = '';
  league_name: string = '';


  constructor(
    private apiService: PruebaapiService,
    private leagues: LeaguesService,
    ) { }

  ngOnInit(): void {
    // this.leagues.getTeamsByLeaugeId(253).subscribe(data => {
    //   this.teams = data;
    //   console.log(data);
    // });
    this.leagues.getLeagueById(39).subscribe(data => {
      this.league = data;
      this.league_icon = this.league[0].logo;
      this.league_name = this.league[0].name;
      console.log(this.league);
    });
    // this.apiService.getFixturesByLeagueId(264, 2023).subscribe(data => {
    //   this.responseData = data.response;
    //   console.log(this.responseData);
    //   this.fillTable();
    // });
    // this.apiService.getDataByPais('Peru', 'teams').subscribe(data => {
    //   this.responseData = data.response;
    //   console.log(this.responseData);
    //   this.fillTable();
    // });
    // this.leagues.getLeagues().subscribe(data => {
    //   console.log(data);
    // });
    // this.apiService.getTimeZone().subscribe(data => {
    //   this.responseData = data.response;
    //   // console.log(this.responseData); // Puedes hacer lo que necesites con los datos aquí
    //   this.fillTable();
    // });
    // this.leagues.getNose().subscribe(data => {
    //   console.log(data);
    // });
    // let insert = {
    //   nosecol: 'JAJAJA'
    // }
    // // console.log(insert);
    // this.leagues.insertNose(insert).subscribe(data => {
    //   console.log(data);
    // });
  }

  fillTable(): void {
    // let teams: number[] = []
    this.responseData.forEach((element: any) => {
      let raoundentero = element.league.round;
      let partes = raoundentero.split(" - ");
      let round = partes[1];
      let insert = {
        date: element.fixture.date,
        id_venue: element.fixture.venue.id,
        city: element.fixture.venue.city,
        status: element.fixture.status.short,
        league_id: element.league.id,
        country: element.league.country,
        league: element.league.name,
        season: element.league.season,
        round: Number(round),
        team_home: element.teams.home.name,
        team_away: element.teams.away.name,
        id_team_home: element.teams.home.id,
        id_team_away: element.teams.away.id,
        winner_home: element.teams.home.winner,
        goals_home: element.goals.home,
        goals_away: element.goals.away
      }
      console.log(insert);
      this.leagues.insertMatch(insert).subscribe(data => {
        console.log(data);
      });
      // console.log(element);
      // let insert = {
      //   team_id: element.team.id,
      //   code: element.team.code,
      //   country: element.team.country,
      //   founded: element.team.founded,
      //   logo: element.team.logo,
      //   name: element.team.name,
      //   national: element.team.national,
      //   capacidad_venue: element.venue.capacity,
      //   city: element.venue.city,
      //   id_venue: element.venue.id,
      //   image_venue: element.venue.image,
      //   name_venue: element.venue.name
      // }
      // teams.push(element.teams.away.id);
      // teams.push(element.teams.home.id);
      // let insert = {
      //   time_zone: element
      // }
      // console.log(insert);
      // this.leagues.insertTimeZone(insert).subscribe(data => {
      //   // console.log(data);
      // });
    });
    // console.log(teams);
    // const teamsSet = [...new Set(teams)];
    // const teamsArray = Array.from(teamsSet);
    // console.log(teamsArray);
    // teamsArray.forEach(element => {
    //   this.teams.forEach((element2: any) => {
    //     console.log(element, element2.team_id, element2.name);
    //     if (element == element2.team_id) {
    //       console.log(element2.team_id, element2.name);
    //       this.leagues.updateTeamLeague(element, 253).subscribe(data => {
    //         console.log(data);
    //       });
    //     }
    //   });
    // });

  }

}
