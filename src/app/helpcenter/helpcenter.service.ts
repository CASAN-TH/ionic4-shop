import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/helpcenters/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class HelpcenterService {
  routeParams: any;

  onHelpcenterDataListChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onHelpcenterDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
    if (this.routeParams.id) {
      this.getHelpcenterData(this.routeParams.id);
    } else {
      this.getHelpcenterDataList();
    }
    return;
  }

  getHelpcenterDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/helpcenter/helpcenter-detail.json').subscribe((res: any) => {
          this.onHelpcenterDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onHelpcenterDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getHelpcenterData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/helpcenter/helpcenter.json').subscribe((res: any) => {
          this.onHelpcenterDataChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onHelpcenterDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createHelpcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHelpcenterDataList();
      },reject)
    })
  }

  updateHelpcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHelpcenterDataList();
      },reject)
    })
  }

  deleteHelpcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHelpcenterDataList();
      },reject)
    })
  }

}
