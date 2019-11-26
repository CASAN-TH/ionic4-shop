import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl + '/api/giftss/';
const mockup = environment.mockup;

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  routeParams: any;

  onGiftsDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onGiftsDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

  onPaymentgiftDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onTcoingiftDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onWarrantygiftDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onSpecificationgiftDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onImformationSpecgiftDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getGiftsData(this.routeParams.id);
    } else {
      this.getGiftsDataList();

      this.getPaymentgiftModalData();
      this.getTcoingiftModalData();
      this.getWarrantygiftModalData();
      this.getSpecificationgiftModalData();
      this.getImformationSpecgiftModalData();
    }
    return;
  }

  getGiftsDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getGiftsData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  createGiftsData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getGiftsDataList();
      }, reject)
    })
  }

  updateGiftsData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getGiftsDataList();
      }, reject)
    })
  }

  deleteGiftsData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getGiftsDataList();
      }, reject)
    })
  }



  getPaymentgiftModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getTcoingiftModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getWarrantygiftModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getSpecificationgiftModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }
  getImformationSpecgiftModalData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/gifts/gifts-detail.json').subscribe((res: any) => {
          this.onGiftsDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onGiftsDataChanged.next(res.data);
        }, reject)
      }

    })
  }

}
