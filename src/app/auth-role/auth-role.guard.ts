import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRoleGuard implements CanActivate {
  constructor(private router:Router){}
  flag:boolean=false; // bien set dieu kien
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    
    // if(this.flag==false)
    // return true; // cho phep vao
    // this.router.navigate(['/login']);
    return true; //
  }
}
