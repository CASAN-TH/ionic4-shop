import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/payfors/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class PayforService {
  routeParams: any;

  onDebitCreditCardDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onBankDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onPayforDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onlineBankingDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onATM_PaymentDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onCounter_PaymentDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onPayforDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));

    this.getPayforData();
    this.getDebitCreditCardData();
    this.getBankData();
    this.getOnlineBankingData();
    this.getATM_PaymentData();
    this.getCounter_PaymentData();
    // if (this.routeParams.id) {
    //   this.getPayforData(this.routeParams.id);
    // } else {
    //   this.getPayforDataList();
    // }
    return;
  }

  getPayforDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/payfor.json').subscribe((res: any) => {
          this.onPayforDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPayforDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getPayforData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/payfor-detail.json').subscribe((res: any) => {
          this.onPayforDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPayforDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getDebitCreditCardData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/debit-creditcard.json').subscribe((res: any) => {
          this.onDebitCreditCardDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onDebitCreditCardDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getBankData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/bank-modal.json').subscribe((res: any) => {
          this.onBankDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onBankDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getOnlineBankingData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/online-banking.json').subscribe((res: any) => {
          this.onlineBankingDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onlineBankingDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getATM_PaymentData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/atm-payment.json').subscribe((res: any) => {
          this.onATM_PaymentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onATM_PaymentDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getCounter_PaymentData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/payfor/counter-payment.json').subscribe((res: any) => {
          this.onCounter_PaymentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCounter_PaymentDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  // getPayforData(id: string): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/payfor/payfor-detail.json').subscribe((res: any) => {
  //         this.onPayforDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onPayforDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }

  createPayforData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getPayforDataList();
      }, reject)
    })
  }

  updatePayforData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getPayforDataList();
      }, reject)
    })
  }

  deletePayforData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getPayforDataList();
      }, reject)
    })
  }

}
