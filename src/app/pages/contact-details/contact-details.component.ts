import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../../service/contact-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import { CONTACT } from 'src/app/Types/contact';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private service: ContactServiceService,
    private route: ActivatedRoute,
    private router:Router
  ) { }
  contact: CONTACT = {
    company: '',
    firstName: "",
    lastName: "",
    phone: "",
    email:""
  }
  edit = false;

  getContactDetails(id:string | number) {
    this.service.getContactDetails(id).subscribe(data => {
      this.contact = data
    })
  }
  deleteContact(id: string | number) {
    this.service.deleteContact(id).subscribe(data => {
      console.log(data)
    })
    this.router.navigate([''])
  }
  editContact() {
    this.edit = true
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.getContactDetails(id)
    }
  }
}
