import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/messages/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  routeParams: any;

  onMessageDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onMessageDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onRecommendDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

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
      this.getMessageData(this.routeParams.id);
    } else {
      this.getMessageDataList();
      this.getRecommendDataList();
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

  getMessageDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/message/message.json').subscribe((res: any) => {
          this.onMessageDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMessageDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getMessageData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/message/message-detail.json').subscribe((res: any) => {
          this.onMessageDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMessageDataChanged.next(res.data);
        },reject)
      }
      
    })
  }

  createMessageData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMessageDataList();
      },reject)
    })
  }

  updateMessageData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMessageDataList();
      },reject)
    })
  }

  deleteMessageData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMessageDataList();
      },reject)
    })
  }

}
