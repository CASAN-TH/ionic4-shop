import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl;
// const mockup = environment.mockup;

const mockup = false;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  routeParams: any;

  onHomeDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onHomeDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCateProductListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onHomeReccommentDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
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
      // this.getHomeData(this.routeParams.id);
    } else {
      this.getHomeDataList();
      this.getHomeReccommentData();
      this.getCateProductListData();
    }
    return;
  }

  getHomeDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/home/home.json').subscribe((res: any) => {
          this.onHomeDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/features', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onHomeDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getHomeData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/home/home-detail.json').subscribe((res: any) => {
          this.onHomeDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onHomeDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getHomeReccommentData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/home/reccomment.json').subscribe((res: any) => {
          this.onHomeReccommentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cateproducthome', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onHomeReccommentDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  getCateProductListData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/cart/cate-product-list.json').subscribe((res: any) => {
          this.onCateProductListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cateproducthome', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCateProductListChanged.next(res.data);
        }, reject)
      }

    })
  }

  createHomeData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHomeDataList();
      }, reject)
    })
  }

  updateHomeData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHomeDataList();
      }, reject)
    })
  }

  deleteHomeData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getHomeDataList();
      }, reject)
    })
  }

}
