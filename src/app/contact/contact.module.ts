import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewAllContactComponent } from './view-all-contact/view-all-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewContactComponent } from './view-contact/view.component';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddContactComponent,
    ViewAllContactComponent,
    ViewContactComponent,
    UpdateContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    AddContactComponent,
    ViewAllContactComponent,
    ViewContactComponent,
    UpdateContactComponent
  ]
})
export class ContactModule { }
