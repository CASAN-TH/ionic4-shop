import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/callcenters/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class CallcenterService {
  routeParams: any;

  onCallcenterDataListChanged: BehaviorSubject<any> = new BehaviorSubject({
    "contacts":{
      "mail":{
        "mailname": "",
        "image": ""
      },
      "social_facebook":{

      },
      "social_line":{

      },
      "days":{

      }
    }
  });
  onCallcenterDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getCallcenterData(this.routeParams.id);
    } else {
      this.getCallcenterDataList();
    }
    return;
  }

  getCallcenterDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/callcenter/callcenter.json').subscribe((res: any) => {
          this.onCallcenterDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCallcenterDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getCallcenterData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/callcenter/callcenter-detail.json').subscribe((res: any) => {
          this.onCallcenterDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCallcenterDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createCallcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCallcenterDataList();
      },reject)
    })
  }

  updateCallcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCallcenterDataList();
      },reject)
    })
  }

  deleteCallcenterData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCallcenterDataList();
      },reject)
    })
  }

}
