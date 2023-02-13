import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
interface Route {
  title: string,
  path:string,
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  routes: Route[] = [
    {
      title: 'Contacts',
      path:''
    },
    {
      title: 'Add Contact',
      path:'/add-contact',
    },
  ]
  constructor(private auth:AuthService) { }
  isLoggedin: Boolean = !!localStorage.getItem('user');
  ngOnInit(): void {
  }
  onLogout() {
    this.auth.logout()
    this.isLoggedin = false
  }
}
