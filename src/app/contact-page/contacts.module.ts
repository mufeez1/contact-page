import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [{
  path: '',
  component: ContactsComponent,
}];
@NgModule({
  declarations: [
    ContactsComponent,
    ContentDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactsModule { }
