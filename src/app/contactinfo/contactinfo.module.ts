import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactinfoComponent } from './add-contactinfo/add-contactinfo.component';
import { ViewAllContactinfoComponent } from './view-all-contactinfo/view-all-contactinfo.component';
import { ViewContactinfoComponent } from './view-contactinfo/view-contactinfo.component';
import { UpdateContactinfoComponent } from './update-contactinfo/update-contactinfo.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CiNavbarComponent } from './ci-navbar/ci-navbar.component';



@NgModule({
  declarations: [
    AddContactinfoComponent,
    ViewAllContactinfoComponent,
    ViewContactinfoComponent,
    UpdateContactinfoComponent,
    CiNavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    AddContactinfoComponent,
    ViewAllContactinfoComponent,
    ViewContactinfoComponent,
    UpdateContactinfoComponent
  ]
})
export class ContactinfoModule { }
