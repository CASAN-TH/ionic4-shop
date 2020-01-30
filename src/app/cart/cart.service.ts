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
export class CartService {
  routeParams: any;

  onCartDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onTotalCartDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onReccommentDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onSpecificationDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onPaymentDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    "selected": {
      "down_amount": {
        "amount_period": ""
      },
      "period_amount": ""
    }
  });
  onVouchersDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);



  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
    this.getCartDataList();
    this.getReccommentDataList();
    this.getTotalCartDataList();
    // this.getSpecificationModalData();
    // this.getPaymentModalData();
    // this.getVouchersModalData();
   

    return;
  }

  getCartDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/cart/cart.json').subscribe((res: any) => {
          this.onCartDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cartsbyuser', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCartDataListChanged.next(res.data);
        }, reject)
      }
    })
  }
  getTotalCartDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/cart/total-cart.json').subscribe((res: any) => {
          this.onTotalCartDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cartstotal', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTotalCartDataChanged.next(res.data);
        }, reject)
      }
    })
  }
  getReccommentDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/cart/reccomment.json').subscribe((res: any) => {
          this.onReccommentDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cateproducthome', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onReccommentDataListChanged.next(res.data);
        }, reject)
      }
    })
  }
  // getSpecificationModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/cart/specification-modal.json').subscribe((res: any) => {
  //         this.onSpecificationDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onSpecificationDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }
  // getVouchersModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/productdetail/vouchers-modal.json').subscribe((res: any) => {
  //         this.onVouchersDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onVouchersDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }

  // getPaymentModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/cart/payment-modal.json').subscribe((res: any) => {
  //         this.onPaymentDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onPaymentDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }

  createCartData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCartDataList();
      }, reject)
    })
  }

  updateCartData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCartDataList();
      }, reject)
    })
  }

  deleteCartData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCartDataList();
      }, reject)
    })
  }

}
