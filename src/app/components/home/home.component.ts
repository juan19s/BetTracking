import { Component } from '@angular/core';
import { PruebaapiService } from 'src/services/pruebaapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  responseData: any;

  constructor(
    private apiService: PruebaapiService
    ) { }

  ngOnInit(): void {
    // this.apiService.getData().subscribe(data => {
    //   this.responseData = data;
    //   console.log(this.responseData); // Puedes hacer lo que necesites con los datos aquí
    // });
  }

}
