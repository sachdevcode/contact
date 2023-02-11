import { Component, OnInit,Input } from '@angular/core';
import { CONTACT } from 'src/app/Types/contact';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: CONTACT;


  constructor(private router:Router) {
    this.contact = {
      id: 0,
      firstName: "",
      lastName: "",
      company: "",
      phone:""
    }
  }

  gotoDetails(id: number) {
    this.router.navigate([`/contact/`,id])
  }
  ngOnInit(): void {
  }

}
