import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/shops/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  routeParams: any;

  onShopDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onShopDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMenuDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    "category_name": "",
    "categories": [],
    "brand_name": "",
    "brands": [],
    "pricerange_name": "",
    "priceranges": []
  });

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
      this.getShopData(this.routeParams.id);
    } else {
      this.getShopDataList();
      this.getMenuData();
    }
    return;
  }

  getShopDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/shop/shop.json').subscribe((res: any) => {
          this.onShopDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onShopDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getShopData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/shop/shop-detail.json').subscribe((res: any) => {
          this.onShopDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onShopDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  getMenuData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/shop/menutabslide.json').subscribe((res: any) => {
          this.onMenuDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMenuDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  createShopData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getShopDataList();
      },reject)
    })
  }

  updateShopData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getShopDataList();
      },reject)
    })
  }

  deleteShopData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getShopDataList();
      },reject)
    })
  }

}
