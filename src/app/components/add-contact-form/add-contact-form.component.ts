import { Component, Input, OnInit } from '@angular/core';
import { CONTACT } from 'src/app/Types/contact';
import {ContactServiceService } from '../../service/contact-service.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  constructor(
    private service: ContactServiceService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  @Input() editable: Boolean = false
  @Input() editValues: CONTACT = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company:'',
  }
    addContactForm = this.formBuilder.group<CONTACT>({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company:'',
    })

  ngOnInit(): void {
    this.addContactForm = this.formBuilder.group<CONTACT>({
      firstName: this.editValues.firstName || '',
      lastName: this.editValues.lastName || '',
      phone: this.editValues.phone || '',
      email: this.editValues.email || '',
      company:this.editValues.company || '',
    })
  }
  onSubmit(): void{
    const { company, email, firstName, lastName, phone } = this.addContactForm.value
    if (company && email && firstName && lastName && phone) {
      if (!this.editable) {
        this.service.addContact({ company, email, firstName, lastName, phone }).subscribe(data => {
          this.router.navigate([''])
        })
      } else {
        this.service.updateContact(this.editValues.id || 0,{ company, email, firstName, lastName, phone }).subscribe(data => {
          this.router.navigate([''])
        })
      }
    }
  }

}
