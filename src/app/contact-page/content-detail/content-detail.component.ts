import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.modal';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  contactDetail: Contacts;

  constructor(private _contactsService: ContactsService) { }

  ngOnInit(): void {
    this._contactsService.contactData$.subscribe((res) => {
      this.contactDetail = res;
    })
  }

}
