import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import {SideNavComponent } from './components/side-nav/side-nav.component';

import { MatInputModule } from '@angular/material/input';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { environment } from 'src/environments/environment';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddContactFormComponent,
    ContactListComponent,
    ContactComponent,
    SideNavComponent,
    AddContactComponent,
    ContactDetailsComponent,
    FilterPipePipe,
    LoginFormComponent,
    LoginComponent,
    SignupComponent,
    ContactInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
