import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn = false;
  constructor(
    public auth: AngularFireAuth,
    private router: Router) { }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.isloggedIn = true
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
        window.location.href = ''
      }
    }).catch((err) => {
      alert(err.message)
    })

  }

  async signUp(email:string,password:string) {
    await this.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.isloggedIn = true
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
        window.location.href = ''
      }
    }).catch((err) => {
      alert(err.message)
    })
  }

  async logout() {
    this.auth.signOut();
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}
