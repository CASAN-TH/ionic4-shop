import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



const helper = new JwtHelperService();
const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  private userData = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router) {

  }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  signup(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      //เรียก Api ได้ token
      this.http.post(`${apiURL}/api/auth/signup`, credentials).subscribe((res: any) => {
        var token = res.token;
        // storage token in local storage
        window.localStorage.setItem(`token@${environment.appName}`, token);
        // decode token to user data
        let decoded = helper.decodeToken(token);
        // emit user Data to subscriber
        this.userData.next(decoded);
        // resolve user data to login page
        resolve(decoded);
      }, reject)
    })

  }

  signin(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      //เรียก Api ได้ token
      this.http.post(`${apiURL}/api/auth/signin`, credentials).subscribe((res: any) => {
        var token = res.token;
        // storage token in local storage
        window.localStorage.setItem(`token@${environment.appName}`, token);
        // decode token to user data
        let decoded = helper.decodeToken(token);
        // emit user Data to subscriber
        this.userData.next(decoded);
        // resolve user data to login page
        resolve(decoded);
      }, reject)
    })

  }

  facebookLogin(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      //เรียก Api ได้ token
      this.http.post(`${apiURL}/api/auth/facebook`, credentials).subscribe((res: any) => {
        var token = res.token;
        // storage token in local storage
        window.localStorage.setItem(`token@${environment.appName}`, token);
        // decode token to user data
        let decoded = helper.decodeToken(token);
        // emit user Data to subscriber
        this.userData.next(decoded);
        // resolve user data to login page
        resolve(decoded);
      }, reject)
    })
  }

  lineLogin(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      //เรียก Api ได้ token
      this.http.post(`${apiURL}/api/auth/line`, credentials).subscribe((res: any) => {
        var token = res.token;
        // storage token in local storage
        window.localStorage.setItem(`token@${environment.appName}`, token);
        // decode token to user data
        let decoded = helper.decodeToken(token);
        // emit user Data to subscriber
        this.userData.next(decoded);
        // resolve user data to login page
        resolve(decoded);
      }, reject)
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
