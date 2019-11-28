import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/productdetails/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class ProductdetailService {
  routeParams: any;

  onProductdetailDataListChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onProductdetailDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  onPaymentDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    "selected": {
      "down_amount": {
        "amount_period": ""
      },
      "period_amount": ""
    }
  });
  onVouchersDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onPromotionDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([
    {
      "image": ""
    },
    {
      "image": ""
    },
    {
      "image": ""
    },
    {
      "image": ""
    }
  ]);
  onTcoinDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onWarrantyDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onSpecificationDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onReviewDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onImformationSpecDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

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
      this.getProductdetailData(this.routeParams.id);
    } else {
      this.getProductdetailDataList();
      this.getPaymentModalData();
      this.getVouchersModalData();
      this.getPromotionModalData();
      this.getTcoinModalData();
      this.getWarrantyModalData();
      this.getSpecificationModalData();
      this.getReviewModalData();
      this.getImformationSpecModalData();
    }
    return;
  }

  getProductdetailDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/productdetail.json').subscribe((res: any) => {
          this.onProductdetailDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onProductdetailDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getProductdetailData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/productdetail-detail.json').subscribe((res: any) => {
          this.onProductdetailDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onProductdetailDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  createProductdetailData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getProductdetailDataList();
      }, reject)
    })
  }

  updateProductdetailData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getProductdetailDataList();
      }, reject)
    })
  }

  deleteProductdetailData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getProductdetailDataList();
      }, reject)
    })
  }




  getPaymentModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/payment-modal.json').subscribe((res: any) => {
          this.onPaymentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPaymentDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getVouchersModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/vouchers-modal.json').subscribe((res: any) => {
          this.onVouchersDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onVouchersDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getPromotionModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/promotion-modal.json').subscribe((res: any) => {
          console.log(res);
          this.onPromotionDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPromotionDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getTcoinModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/tcoin-modal.json').subscribe((res: any) => {
          this.onTcoinDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onTcoinDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getWarrantyModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/warranty-modal.json').subscribe((res: any) => {
          this.onWarrantyDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onWarrantyDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getSpecificationModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/specification-modal.json').subscribe((res: any) => {
          this.onSpecificationDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onSpecificationDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getReviewModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/review-modal.json').subscribe((res: any) => {
          this.onReviewDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onReviewDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getImformationSpecModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/imformation-modal.json').subscribe((res: any) => {
          this.onImformationSpecDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onImformationSpecDataChanged.next(res.data);
        }, reject)
      }

    })
  }


}
