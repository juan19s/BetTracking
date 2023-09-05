import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
  providers: [MessageService]
})
export class SinginComponent {
  username: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    console.log('ngOninit');
  }

  addUser() {
    //Validamos que los campos no esten vacios
    if (this.username == '' || this.password == '' || this.confirm_password == '') {
      this.showTopCenter();
      return;
    } else {
      console.log('ola usuario');
    }
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'NASHEEEEEEEEEE' });
  }
}
