import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
