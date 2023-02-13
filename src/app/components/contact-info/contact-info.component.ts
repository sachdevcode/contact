import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CONTACT } from 'src/app/Types/contact';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() contact: CONTACT = {
    company: '',
    firstName: '',
    lastName: '',
    phone: '',
    email:''
  }
  @Output() enableEdit = new EventEmitter();

  constructor(
    private service: ContactServiceService,
    private router:Router
  ) { }
  deleteContact(id: string | number) {
    this.service.deleteContact(id).subscribe(data => {
    })
    this.router.navigate([''])
  }
  onEdit() {
    this.enableEdit.emit()
  }
  ngOnInit(): void {
  }

}
