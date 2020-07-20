import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  private photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
changeMemberPhoto(photoUrl: string) {
  this.photoUrl.next(photoUrl);
}
// model is just an object that save username and password
  // tslint:disable-next-line: typedef
  login(model: any){
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((responce: any) => {
        const user = responce;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          console.log(this.decodedToken);
          this.changeMemberPhoto(this.currentUser.photoUrl);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(user: User){
    return this.http.post(this.baseUrl + 'register', user);
  }

  // tslint:disable-next-line: typedef
  loggedIn(){
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
