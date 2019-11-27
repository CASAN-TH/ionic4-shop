import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/addaddresss/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class AddaddressService {
  routeParams: any;

  onAddaddressDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onAddaddressDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getAddaddressData(this.routeParams.id);
    } else {
      this.getAddaddressDataList();
    }
    return;
  }

  getAddaddressDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/addaddress/addaddress.json').subscribe((res: any) => {
          this.onAddaddressDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAddaddressDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getAddaddressData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/addaddress/addaddress-detail.json').subscribe((res: any) => {
          this.onAddaddressDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAddaddressDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createAddaddressData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAddaddressDataList();
      },reject)
    })
  }

  updateAddaddressData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAddaddressDataList();
      },reject)
    })
  }

  deleteAddaddressData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAddaddressDataList();
      },reject)
    })
  }

}
