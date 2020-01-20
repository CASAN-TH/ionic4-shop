import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/currentamounts/';
const mockup = environment.mockup;
const urlApi = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CurrentamountService {
  routeParams: any;

  onCurrentamountDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onCurrentamountDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onAccountDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCurrentAmountDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getCurrentamountData(this.routeParams.id);
    } else {
      this.getCurrentamountDataList();
      this.getAccountData();
      this.getCurrentAmountData();
    }
    return;
  }
  
  getCurrentAmountData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/currentamount/currentamount-detail.json').subscribe((res: any) => {
          this.onCurrentAmountDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(urlApi + "/api/me", { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCurrentAmountDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAccountData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/account-detail.json').subscribe((res: any) => {
          this.onAccountDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(urlApi + "/api/me", { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAccountDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getCurrentamountDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/currentamount/currentamount.json').subscribe((res: any) => {
          this.onCurrentamountDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCurrentamountDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getCurrentamountData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/currentamount/currentamount-detail.json').subscribe((res: any) => {
          this.onCurrentamountDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCurrentamountDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createCurrentamountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCurrentamountDataList();
      },reject)
    })
  }

  updateCurrentamountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCurrentamountDataList();
      },reject)
    })
  }

  deleteCurrentamountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCurrentamountDataList();
      },reject)
    })
  }

}
