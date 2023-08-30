import { Component } from '@angular/core';
import { LeaguesService } from 'src/services/leagues.service';
import { PruebaapiService } from 'src/services/pruebaapi.service';

@Component({
  selector: 'app-table-league-stats',
  templateUrl: './table-league-stats.component.html',
  styleUrls: ['./table-league-stats.component.css']
})
export class TableLeagueStatsComponent {

  teams: any;
  league: any;
  league_icon: string = '';
  league_name: string = '';
  league_id: number = 39;


  constructor(
    private apiService: PruebaapiService,
    private leagues: LeaguesService,
  ) { }

  ngOnInit(): void {
    this.leagues.getTeamsByLeaugeId(this.league_id).subscribe(data => {
      this.teams = data;
      // console.log(data);
    });
    this.leagues.getLeagueById(this.league_id).subscribe(data => {
      this.league = data;
      this.league_icon = this.league[0].logo;
      this.league_name = this.league[0].name;
      // console.log(this.league);
    });
  }

}
