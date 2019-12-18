import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl;
const api_url2 = environment.apiUrl;
const api_url3 = environment.apiUrl;
const mockup = environment.mockup;

// const api_url = 'http://localhost:3000';
// const mockup = false;
// const api_url2 = 'http://localhost:3001';
// const api_url3 = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class RegcreditService {
  routeParams: any;

  onRegcreditDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onRegcreditDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onRegcreditProfileChanged: BehaviorSubject<any> = new BehaviorSubject({
    "frontcardimaged": { "url": "" },
    "backcardimaged": { "url": "" },
    "personwithcardimaged": { "url": "" }
  });
  onRegcreditSecondContactChanged: BehaviorSubject<any> = new BehaviorSubject({
    "secondcontact": [{
      "relation": "",
      "name": "",
      "lastname": "",
      "tel": ""
    }]
  });

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
    // if (this.routeParams.id) {
    //   this.getRegcreditData(this.routeParams.id);
    // } else {
    // this.getRegcreditDataList();
    this.getRegcreditProfile();
    this.getRegcreditSecondContact();
    // }
    return;
  }

  getRegcreditDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/regcredit/regcredit.json').subscribe((res: any) => {
          this.onRegcreditDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onRegcreditDataListChanged.next(res.data);
        }, reject)
      }
    })
  }
  getRegcreditProfile(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/regcredit/profile.json').subscribe((res: any) => {
          this.onRegcreditProfileChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cusprofilesbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onRegcreditProfileChanged.next(res.data);
        }, reject)
      }
    })
  }

  getRegcreditSecondContact(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/regcredit/secondcontact.json').subscribe((res: any) => {
          this.onRegcreditSecondContactChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url2 + '/api/secondcontactsbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onRegcreditSecondContactChanged.next(res.data);
        }, reject)
      }
    })
  }

  getRegcreditData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/regcredit/regcredit-detail.json').subscribe((res: any) => {
          this.onRegcreditDataListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onRegcreditDataChanged.next(res.data);
        }, reject)
      }

    })
  }

  createRegcreditProfileData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url + '/api/customerprofiles', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getRegcreditProfile();
      }, reject)
    })
  }

  updateRegcreditProfileData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + '/api/customerprofiles/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getRegcreditProfile();
      }, reject)
    })
  }

  deleteRegcreditProfileData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + '/api/customerprofiles/' + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getRegcreditProfile();
      }, reject)
    })
  }

  async createSecondContactData(body) {
    const res = await this.http.post(api_url2 + '/api/secondcontacts', body, { headers: this.authorizationHeader() }).toPromise();
    return res
  }

  async updateSecondContactData(body) {
    const res = await this.http.put(api_url2 + '/api/secondcontacts/' + body._id, body, { headers: this.authorizationHeader() }).toPromise();
    return res
  }

  deleteSecondContactData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url2 + '/api/secondcontacts/' + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getRegcreditSecondContact();
      }, reject)
    })
  }

  async updateUser(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      const res = await this.http.put(api_url3 + '/api/me', body, { headers: this.authorizationHeader() }).toPromise();
      return res
    }
  }

}
