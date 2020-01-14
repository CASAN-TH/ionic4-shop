import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/tcoins/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class TcoinService {
  routeParams: any;

  onTcoinDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onTcoinDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMyTcoinDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onRecommendDataListChanged: BehaviorSubject<any> = new BehaviorSubject([]);

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
      this.getTcoinData(this.routeParams.id);
    } else {
      this.getTcoinDataList();
      this.getMyTcoinData();
      this.getRecommendDataList()
    }
    return;
  }

  getRecommendDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/cart/reccomment.json').subscribe((res: any) => {
          this.onRecommendDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onRecommendDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getMyTcoinData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/tcoin/tcoin-detail.json').subscribe((res: any) => {
          this.onMyTcoinDataChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMyTcoinDataChanged.next(res.data);
        },reject)
      }
    })
  }

  getTcoinDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/tcoin/tcoin.json').subscribe((res: any) => {
          this.onTcoinDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTcoinDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getTcoinData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/tcoin/tcoin-detail.json').subscribe((res: any) => {
          this.onTcoinDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTcoinDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createTcoinData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTcoinDataList();
      },reject)
    })
  }

  updateTcoinData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTcoinDataList();
      },reject)
    })
  }

  deleteTcoinData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getTcoinDataList();
      },reject)
    })
  }

}
