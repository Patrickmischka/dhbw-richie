import { Component } from '@angular/core';
import { appService } from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public email = '';
  public username = '';
  public password = '';
  public passwordConfirm = '';

  constructor(private readonly appService: appService) { }


  public registrieren() {
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    console.log(this.passwordConfirm);
    this.appService.createUser({ email: this.email, username: this.username, password: this.password });
  }
}
