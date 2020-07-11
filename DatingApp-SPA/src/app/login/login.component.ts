import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

    // tslint:disable-next-line: typedef
    login(){
      this.authService.login(this.model).subscribe(next => {
        console.log('Loggedin successfully');
      }, error => {
        console.log('Failed to login');
      });
    }
    // tslint:disable-next-line: typedef
    loggedIn(){
      const token = localStorage.getItem('token');
      // !!token return true or false
      return !!token;
    }

  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelLogin.emit(false);
    console.log('cancelled');
  }

}
