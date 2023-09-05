import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private messageService: MessageService,
    private _userService: UserService,
    private router: Router
    // private authService: AuthService
  ) {}

  ngOnInit() {

  }

  login() {
    if (this.username == '' || this.password == '') {
      this.showTopCenter('error', 'Error', 'Los campos no pueden estar vacios');
      return;
    }


    const user: User = {
      username: this.username,
      password: this.password
    }

    this._userService.login(user).pipe().subscribe(data => {
      console.log(data);
      this.showTopCenter('success', 'Success', 'Usuario logueado correctamente');
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
      this.showTopCenter('error', 'Error', 'Error al loguear el usuario');
    });
    console.log(user);
  }

  showTopCenter(severity: string, summary: string, detail: string) {
    this.messageService.add({ key: 'tc', severity: severity, summary: summary, detail: detail });
  }
}
