import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const mockup = environment.mockup;
const urlApi = environment.apiUrl
const api_url = environment.apiUrl + '/api/accounts/';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  routeParams: any;

  onAccountDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onAccountDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onAccountData2Changed: BehaviorSubject<any> = new BehaviorSubject({});
  onPromotionChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCreditDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    credit: {
      creditremain: null
    }
  });
  onAccountScoreDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onAddressDataListChanged :  BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getAccountData(this.routeParams.id);
    } else {
      this.getAccountDataList();
      this.getAccountData2();
      this.getPromotionAndAds();
      this.getCreditData();
      this.getAccountScoreData();
      this.getAddressDataList();
    }
    return;
  }

  getAddressDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/me/me-detail.json').subscribe((res: any) => {
          this.onAddressDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAddressDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAccountDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/account.json').subscribe((res: any) => {
          this.onAccountDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAccountDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAccountData2(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/account-detail.json').subscribe((res: any) => {
          this.onAccountData2Changed.next(res.data);
        }, reject)
      } else {
        this.http.get(urlApi + "/api/me", { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAccountData2Changed.next(res.data);
        }, reject)
      }
    })
  }

  getPromotionAndAds(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/ads-promotion.json').subscribe((res: any) => {
          this.onPromotionChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPromotionChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAccountData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/account-detail.json').subscribe((res: any) => {
          this.onAccountDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAccountDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  createAccountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAccountDataList();
      }, reject)
    })
  }

  updateAccountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAccountDataList();
      }, reject)
    })
  }

  deleteAccountData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAccountDataList();
      }, reject)
    })
  }

  getCreditData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit-point.json').subscribe((res: any) => {
          this.onCreditDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAccountScoreData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/account/account-datascore.json').subscribe((res: any) => {
          this.onAccountScoreDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAccountScoreDataChanged.next(res.data);
        }, reject)
      }
    })
  }

}
