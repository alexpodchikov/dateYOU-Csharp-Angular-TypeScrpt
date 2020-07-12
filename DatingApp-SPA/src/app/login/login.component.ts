import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

    // tslint:disable-next-line: typedef
    login(){
      this.authService.login(this.model).subscribe(next => {
        this.alertify.success('Loggedin successfully');
      }, error => {
        this.alertify.error(error);
      });
    }
    // tslint:disable-next-line: typedef
    loggedIn(){
      return this.authService.loggedIn();
    }

  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelLogin.emit(false);
    this.alertify.message('cancelled');
  }

}
