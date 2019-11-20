import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginPage } from './login/login.page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {
      var token = window.localStorage.getItem(`token@${environment.appName}`);
      if (token) {
        resolve(true);
      } else {
        let url: string = state.url; // เก็บ url ที่พยายามจะเข้าใช้งาน
        // แต่ถ้ายังไม่ได้ล็อกอิน ให้เก็บ url ที่พยายามจะเข้าใช้งาน สำหรับไว้ลิ้งค์เปลี่ยนหน้า
        this.auth.redirectUrl = url; // redirectUrl เป็นตัวแปรที่อยู่ใน authService

        // ลิ้งค์ไปยังหน้าล็อกอิน เพื่อล็อกอินเข้าใช้งานก่อน
        this.router.navigateByUrl('/login')
        resolve(false); // คืนค่า false กรณียังไม่ได้ล็อกอิน
      }
    })
  }

}
