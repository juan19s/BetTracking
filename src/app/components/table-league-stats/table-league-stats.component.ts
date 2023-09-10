import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  league_id: number = 0;


  constructor(
    private apiService: PruebaapiService,
    private leagues: LeaguesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.league_id = Number(params.get('id'));
      console.log(this.league_id);
      // Aquí puedes usar el idLeague para realizar las operaciones necesarias
    });
    this.leagues.getTeamsByLeaugeId(this.league_id).subscribe(data => {
      this.teams = data;
      this.teams = this.teams.sort((a: any, b: any) => {
        return a.position - b.position;
      });
      console.log(data);
    });
    this.leagues.getLeagueById(this.league_id).subscribe(data => {
      this.league = data;
      console.log(data);
      this.league_icon = this.league[0].flag;
      this.league_name = this.league[0].name;
      // console.log(this.league);
    });
  }

}
