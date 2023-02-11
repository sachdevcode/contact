import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { CONTACT } from '../Types/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  baseURL = 'http://localhost:3000/contacts'

  constructor(private http: HttpClient) { }

  getContacts():Observable<CONTACT[]> {
    return this.http.get<CONTACT[]>(this.baseURL).pipe()
  }

  addContact(contact:CONTACT):Observable<CONTACT>{
    return this.http.post<CONTACT>(this.baseURL, contact)
  }

  getContactDetails(id: number | string):Observable<CONTACT>{
    return this.http.get<CONTACT>(`${this.baseURL}/${id}`).pipe()
  }
  deleteContact(id: number | string): Observable<CONTACT>{
    return this.http.delete<CONTACT>(`${this.baseURL}/${id}`).pipe()
  }
}
