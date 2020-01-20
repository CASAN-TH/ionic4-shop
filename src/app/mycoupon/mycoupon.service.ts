import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/mycoupons/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class MycouponService {
  routeParams: any;

  onMycouponDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onMycouponDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getMycouponData(this.routeParams.id);
    } else {
      this.getMycouponDataList();
    }
    return;
  }

  getMycouponDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/mycoupon/mycoupon.json').subscribe((res: any) => {
          this.onMycouponDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMycouponDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getMycouponData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/mycoupon/mycoupon-detail.json').subscribe((res: any) => {
          this.onMycouponDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMycouponDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createMycouponData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMycouponDataList();
      },reject)
    })
  }

  updateMycouponData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMycouponDataList();
      },reject)
    })
  }

  deleteMycouponData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMycouponDataList();
      },reject)
    })
  }

}
