import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/services/user.service';

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

  constructor(
    private messageService: MessageService,
    private _userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    console.log('ngOninit');
  }

  addUser() {
    //Validamos que los campos no esten vacios
    if (this.username == '' || this.password == '' || this.confirm_password == '') {
      this.showTopCenter('error', 'Error', 'Los campos no pueden estar vacios');
      return;
    }

    if (this.password != this.confirm_password) {
      this.showTopCenter('error', 'Error', 'Las contraseñas no coinciden');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password
    }

    // console.log(user);
    this._userService.singIn(user).pipe().subscribe(data => {
      console.log(data);
      this.showTopCenter('success', 'Success', 'Usuario creado correctamente');
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
      this.showTopCenter('error', 'Error', 'Error al crear el usuario');
    });

  }

  showTopCenter(severity: string, summary: string, detail: string) {
    this.messageService.add({ key: 'tc', severity: severity, summary: summary, detail: detail });
  }
}
