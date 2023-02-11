import { Component, OnInit } from '@angular/core';
import { CONTACT } from 'src/app/Types/contact';
import {ContactServiceService } from '../../service/contact-service.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent {

  constructor(
    private service: ContactServiceService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

    addContactForm = this.formBuilder.group<CONTACT>({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company:'',
    })

  onSubmit(): void{
    const { company, email, firstName, lastName, phone } = this.addContactForm.value
    if (company && email && firstName && lastName && phone) {
      this.service.addContact({ company, email, firstName, lastName, phone }).subscribe(data => {
        this.router.navigate([''])
      })
    }
  }

}
