import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl;
const mockup = environment.mockup;

// const api_url = 'http://localhost:3000';
// const mockup = false;

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  routeParams: any;
  creditpoint: any = {
    "credit": {
      "creditremain": {}
    }
  };

  onCreditDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCreditStatusChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCreditMenuListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  onCreditPointChanged: BehaviorSubject<any> = new BehaviorSubject(this.creditpoint);
  onBillChanged: BehaviorSubject<any> = new BehaviorSubject({});

  onContactDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMarriageDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onSecondContactDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onAssetDocsDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onJobDataChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      this.getCreditData(this.routeParams.id);
    } else {
      this.getMenuDataList();
      this.getCustomerBillData();
      this.getCreditPointData();
      this.getCreditStatus();

      this.getContactData();
      this.getMarriageData();
      this.getSecondContactData();
      this.getAssetDocsData();
      this.getJobData();
    }
    return;
  }

  getMenuDataList(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/menu.json').subscribe((res: any) => {
          this.onCreditMenuListChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/menus', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditMenuListChanged.next(res.data);
        }, reject)
      }
    })
  }

  getCustomerBillData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/bill.json').subscribe((res: any) => {
          this.onBillChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/customerbills', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onBillChanged.next(res.data);
        }, reject)
      }
    })
  }

  getCreditPointData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit-point.json').subscribe((res: any) => {
          this.onCreditPointChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/creditpoints', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditPointChanged.next(res.data);
        }, reject)
      }
    })
  };

  getCreditStatus(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/regcredit/profile.json').subscribe((res: any) => {
          this.onCreditStatusChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/cusprofilesbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditStatusChanged.next(res.data);
        }, reject)
      }
    })
  };

  getContactData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/contact.json').subscribe((res: any) => {
          this.onContactDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/contactbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onContactDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getMarriageData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/marriage.json').subscribe((res: any) => {
          this.onMarriageDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/marriagebyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onMarriageDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getSecondContactData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/secondcontact.json').subscribe((res: any) => {
          this.onSecondContactDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/secondcontactsbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onSecondContactDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getAssetDocsData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/asset-docs.json').subscribe((res: any) => {
          this.onAssetDocsDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/assetdocsbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onAssetDocsDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getJobData(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/job.json').subscribe((res: any) => {
          this.onJobDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + '/api/jobbyuserid', { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onJobDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  getCreditData(id: string): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (mockup) {
        this.http.get('../../assets/json/credit/credit-detail.json').subscribe((res: any) => {
          this.onCreditDataChanged.next(res.data);
        }, reject)
      } else {
        this.http.get(api_url + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
          this.onCreditDataChanged.next(res.data);
        }, reject)
      }
    })
  }

  createCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(api_url, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditStatus();
      }, reject)
    })
  }

  updateCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(api_url + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditStatus();
      }, reject)
    })
  }

  deleteCreditData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(api_url + body._id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getCreditStatus();
      }, reject)
    })
  }

  updateContact(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.put(api_url + '/api/contacts/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getContactData();
      });
    }
  }

  createContact(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.post(api_url + '/api/contacts', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getContactData();
      });
    }
  }

  updateMarriage(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.put(api_url + '/api/marriages/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMarriageData();
      });
    }
  }

  createMarriage(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.post(api_url + '/api/marriages', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getMarriageData();
      });
    }
  }

  updateSecondContact(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.put(api_url + '/api/secondcontacts/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getSecondContactData();
      });
    }
  }

  createSecondContact(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.post(api_url + '/api/secondcontacts', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getSecondContactData();
      });
    }
  }

  updateAssetDocs(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.put(api_url + '/api/assetdocss/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAssetDocsData();
      });
    }
  }

  createAssetDocs(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.post(api_url + '/api/assetdocss', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getAssetDocsData();
      });
    }
  }

  updateJob(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.put(api_url + '/api/jobs/' + body._id, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getJobData();
      });
    }
  }

  createJob(body) {
    if (mockup) {
      const res = {
        "status": 200,
        "data": body
      }
      return res
    } else {
      this.http.post(api_url + '/api/jobs', body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        this.getJobData();
      });
    }
  }

}
