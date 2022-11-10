import { Contacts } from './../contacts.modal';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsList: Contacts[] = [];
  selectedIndex: number = 0;
  constructor(private _contactsService: ContactsService) { }

  ngOnInit(): void {
    this._contactsService.getContactsData().subscribe((res) => {
      this.contactsList = res;
      this._contactsService.contactData$.next(res[0]);
    })
  }
  setContactData(data, index) {
    this._contactsService.contactData$.next(data);
    this.selectedIndex = index;
  }
}
