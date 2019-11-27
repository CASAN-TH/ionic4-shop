import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/termsandconditions/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class TermsandconditionService {
  routeParams: any;

  onTermsandconditionDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onTermsandconditionDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getTermsandconditionData(this.routeParams.id);
    } else {
      this.getTermsandconditionDataList();
    }
    return;
  }

  getTermsandconditionDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/termsandcondition/termsandcondition.json').subscribe((res: any) => {
          this.onTermsandconditionDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTermsandconditionDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getTermsandconditionData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/termsandcondition/termsandcondition-detail.json').subscribe((res: any) => {
          this.onTermsandconditionDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTermsandconditionDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createTermsandconditionData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTermsandconditionDataList();
      },reject)
    })
  }

  updateTermsandconditionData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTermsandconditionDataList();
      },reject)
    })
  }

  deleteTermsandconditionData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTermsandconditionDataList();
      },reject)
    })
  }

}
