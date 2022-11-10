import { Contacts } from './contacts.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactData$: BehaviorSubject<Contacts> = new BehaviorSubject<Contacts>(null);
  
  constructor(private _httpClient: HttpClient) {
  }

  getContactsData() {
    return this._httpClient.get('/assets/data/contacts.json') as Observable<Contacts[]>;
  }

}
