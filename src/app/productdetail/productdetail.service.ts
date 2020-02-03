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
export class ProductdetailService {
  routeParams: any;

  onProductdetailDataListChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onProductdetailWarrantyDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onProductdetailDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  onPaymentDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onVouchersDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    "promotions": [
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
    ],
    "tcoins": {
      "tcoinname": ""
    }
  });
  // onPromotionDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([
  //   {
  //     "image": ""
  //   },
  //   {
  //     "image": ""
  //   },
  //   {
  //     "image": ""
  //   },
  //   {
  //     "image": ""
  //   }
  // ]);
  // onTcoinDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onWarrantyDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  onSpecificationDataChanged: BehaviorSubject<any> = new BehaviorSubject({
    "options_list1": {
      "name": "",
      "list_items": [
        {
          "name": ""
        }
      ]
    },
    "options_list2": {
      "name": "",
      "list_items": [
        {
          "name": ""
        }
      ]
    }
  });

  onReviewDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onImformationSpecDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onShareDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onReccommentDataChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

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
      this.getProductdetailDataList();
      this.getProductdetailWarrantyData();
      this.getPaymentModalData();
      this.getReccommentData();
      this.getVouchersModalData();
      this.getWarrantyModalData();
      this.getShareModalData();
      this.getImformationSpecModalData();

      // this.getReviewModalData();
      
    } else {
      // return new Promise((resolve, reject) => {
      //   return reject('rejected')
      // });
    }
  }

  getUser() {
    const resData = this.http.get(api_url + '/api/me', { headers: this.authorizationHeader() }).toPromise();
    return resData;
  }

  getProductdetailData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/productdetail-detail.json').subscribe((res: any) => {
          this.onProductdetailDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/products/' + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onProductdetailDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  adProductCartList(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url + '/api/carts', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getProductdetailDataList();
      }, reject)
    })
  }

  getProductdetailDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/productdetail.json').subscribe((res: any) => {
          this.onProductdetailDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/products', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onProductdetailDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getProductdetailWarrantyData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/productdetail-detail.json').subscribe((res: any) => {
          this.onProductdetailWarrantyDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/notices', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onProductdetailWarrantyDataChanged.next(res.data);
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


  getReccommentData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/reccomment.json').subscribe((res: any) => {
          this.onReccommentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cateproducthome', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onReccommentDataChanged.next(res.data);
        }, reject)
      }

    })
  }




  getPaymentModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/productdetail/payment-modal.json').subscribe((res: any) => {
          this.onPaymentDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/products', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onPaymentDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getVouchersModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (!mockup) {
        this.http.get('../../assets/json/productdetail/benefit-modal.json').subscribe((res: any) => {
          this.onVouchersDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onVouchersDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getWarrantyModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (!mockup) {
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
  getImformationSpecModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (!mockup) {
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
  // getPromotionModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/productdetail/promotion-modal.json').subscribe((res: any) => {
  //         console.log(res);
  //         this.onPromotionDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onPromotionDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }
  // getTcoinModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/productdetail/tcoin-modal.json').subscribe((res: any) => {
  //         this.onTcoinDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onTcoinDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }
  // getWarrantyModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/productdetail/warranty-modal.json').subscribe((res: any) => {
  //         this.onWarrantyDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onWarrantyDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }
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
  // getImformationSpecModalData(): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     if (mockup) {
  //       this.http.get('../../assets/json/productdetail/imformation-modal.json').subscribe((res: any) => {
  //         this.onImformationSpecDataChanged.next(res.data);
  //       }, reject)
  //     } else {
  //       this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
  //         this.onImformationSpecDataChanged.next(res.data);
  //       }, reject)
  //     }

  //   })
  // }


  getShareModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (!mockup) {
        this.http.get('../../assets/json/productdetail/share-modal.json').subscribe((res: any) => {
          this.onShareDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onShareDataChanged.next(res.data);
        }, reject)
      }

    })
  }


}
