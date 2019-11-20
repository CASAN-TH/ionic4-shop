import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  private userData = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router) {
    
  }


  login(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      //เรียก Api ได้ token
      let token = "ddddd"
      
      // storage token in local storage
      window.localStorage.setItem(`token@${environment.appName}`, token);
      
      // decode token to user data
      //let decoded = helper.decodeToken(token);
      let decoded = {};
      
      // emit user Data to subscriber
      this.userData.next(decoded);
      
      // resolve user data to login page
      resolve(decoded);
    })

  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    window.localStorage.remove(`token@${environment.appName}`).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
  }

}
