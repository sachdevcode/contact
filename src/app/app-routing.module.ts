import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {AuthGuard} from './shared/auth.guard';
const routes: Routes = [
  {
    component: MainComponent,
    path: '',
    canActivate:[AuthGuard]
  },
  {
    component: AddContactComponent,
    path: 'add-contact',
    canActivate:[AuthGuard]
  },
  {
    component: ContactDetailsComponent,
    path: 'contact/:id',
    canActivate:[AuthGuard]
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: SignupComponent,
    path:'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
