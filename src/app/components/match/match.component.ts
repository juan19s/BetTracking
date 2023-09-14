import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  match_id: number = 0;

  constructor(
    private route: ActivatedRoute
  ){

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.match_id = Number(params.get('id'));
      console.log(this.match_id);
      // Aquí puedes usar el idLeague para realizar las operaciones necesarias
    });
  }

}
