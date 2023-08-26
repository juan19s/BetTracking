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

  constructor(
    private apiService: PruebaapiService,
    private leagues: LeaguesService,
    ) { }

  ngOnInit(): void {
    this.leagues.getLeagues().subscribe(data => {
      console.log(data);
    });
    // this.leagues.getLeagues().subscribe(data => {
    //   console.log(data);
    // });
    // this.apiService.getData().subscribe(data => {
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
    this.responseData.forEach((element: any) => {
      // console.log(element);
      let insert = {
        league_id: element.league.id,
        name: element.league.name,
        type: element.league.type,
        logo: element.league.logo,
        country: element.country.name,
        code: element.country.code,
        flag: element.country.flag
      }
      console.log(insert);
      // this.leagues.insertLeague(insert).subscribe(data => {
      //   // console.log(data);
      // });
    });
  }

}
