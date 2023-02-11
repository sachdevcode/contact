import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: AddContactComponent,
    path:'add-contact'
  },
  {
    component: ContactDetailsComponent,
    path:'contact/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
