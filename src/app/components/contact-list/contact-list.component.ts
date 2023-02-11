import { Component, OnInit } from '@angular/core';
import { CONTACT } from 'src/app/Types/contact';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private service: ContactServiceService) { }
  contacts: CONTACT[] = []
  searchString: string = ""

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts() {
    this.service.getContacts().subscribe(data => {
      this.contacts = data
    })
  }
}
