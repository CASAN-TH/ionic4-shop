import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/credits/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  routeParams: any;
  creditpoint: any = {
    "credit": {
      "creditremain": {}
    }
  };

  onCreditDataListChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCreditDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  onCreditMenuListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onCreditPointChanged: BehaviorSubject<any> = new BehaviorSubject(this.creditpoint);

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
      this.getCreditData(this.routeParams.id);
    } else {
      this.getCreditDataList();
      this.getMenuDataList();
      this.getCreditPointData();
    }
    return;
  }

  getCreditDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit.json').subscribe((res: any) => {
          this.onCreditDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getCreditData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit-detail.json').subscribe((res: any) => {
          this.onCreditDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  getMenuDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/menu.json').subscribe((res: any) => {
          this.onCreditMenuListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditMenuListChanged.next(res.data);
        }, reject)
      }
    })
  }
  getCreditPointData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit-point.json').subscribe((res: any) => {
          this.onCreditPointChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditPointChanged.next(res.data);
        }, reject)
      }
    })
  }

  createCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditDataList();
      }, reject)
    })
  }

  updateCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditDataList();
      }, reject)
    })
  }

  deleteCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditDataList();
      }, reject)
    })
  }

}
