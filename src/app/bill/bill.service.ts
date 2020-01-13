import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/bills/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class BillService {
  routeParams: any;

  onBillDataListChanged: BehaviorSubject<any> = new BehaviorSubject({
    "bills": [{
      "bill_status": "",
      "bill_products": []
    }]
  });
  onPaymentHistoryDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onPaybackHistoryDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
      this.getBillDataList();
      this.getPaymentData();
      this.getPaybackData();
    return;
  }

  getBillDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/bill/bill.json').subscribe((res: any) => {
          this.onBillDataListChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onBillDataListChanged.next(res.data);
        },reject)
      }
    })
  }

  getPaymentData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/bill/payment-history.json').subscribe((res: any) => {
          this.onPaymentHistoryDataChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPaymentHistoryDataChanged.next(res.data);
        },reject)
      }
    })
  }

  getPaybackData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if(mockup){
        this.http.get('../../assets/json/bill/payback-history.json').subscribe((res: any) => {
          this.onPaybackHistoryDataChanged.next(res.data);
        },reject)
      }else{
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPaybackHistoryDataChanged.next(res.data);
        },reject)
      }
    })
  }

  createBillData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getBillDataList();
      },reject)
    })
  }

  updateBillData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getBillDataList();
      },reject)
    })
  }

  deleteBillData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getBillDataList();
      },reject)
    })
  }

}
