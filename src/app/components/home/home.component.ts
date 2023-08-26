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
    // this.leagues.getLeagues().subscribe(data => {
    //   console.log(data);
    // });
    // this.apiService.getDataByPais('Peru', 'teams').subscribe(data => {
    //   this.responseData = data.response;
    //   console.log(this.responseData);
    //   this.fillTable();
    // });
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
        team_id: element.team.id,
        code: element.team.code,
        country: element.team.country,
        founded: element.team.founded,
        logo: element.team.logo,
        name: element.team.name,
        national: element.team.national,
        capacidad_venue: element.venue.capacity,
        city: element.venue.city,
        id_venue: element.venue.id,
        image_venue: element.venue.image,
        name_venue: element.venue.name
      }
      console.log(insert);
      this.leagues.insertTeam(insert).subscribe(data => {
        // console.log(data);
      });
    });
  }

}
