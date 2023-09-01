import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../shared/shared.module';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';



@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ViewComponent,
    UserNavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ViewComponent,
    UserNavbarComponent,
  ]
})
export class UserModule { }
