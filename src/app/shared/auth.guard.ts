import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
    const isloggedIn = !!localStorage.getItem('user')
    if(isloggedIn) return isloggedIn
    this.router.navigate(['login'])
    return false
  }

}
