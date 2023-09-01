import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component'
import { ViewUserComponent } from './user/view-user/view-user.component'
import { UpdateUserComponent } from './user/update-user/update-user.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './user/view/view.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ViewAllContactComponent } from './contact/view-all-contact/view-all-contact.component';
import { ViewContactComponent } from './contact/view-contact/view.component';
import { UpdateContactComponent } from './contact/update-contact/update-contact.component';
import { AddContactinfoComponent } from './contactinfo/add-contactinfo/add-contactinfo.component';
import { ViewAllContactinfoComponent } from './contactinfo/view-all-contactinfo/view-all-contactinfo.component';
import { ViewContactinfoComponent } from './contactinfo/view-contactinfo/view-contactinfo.component';
import { UpdateContactinfoComponent } from './contactinfo/update-contactinfo/update-contactinfo.component';
import { SigninComponent } from './login/signin/signin.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:SigninComponent},

  { path:'admin',component:HomeComponent },
  
  { path:'admin/viewAll',component:ViewUserComponent },
  { path:'user/register',component:AddUserComponent },
  { path:'user/update/:id',component:UpdateUserComponent },
  { path:'user/view/:id', component:ViewComponent},

  { path:'user/:userid/contact/register', component:AddContactComponent },
  { path:'user/:userid/contact/viewAll', component:ViewAllContactComponent },
  { path:'user/:userid/contact/view/:id', component:ViewContactComponent },
  { path:'user/:userid/contact/update/:id', component:UpdateContactComponent },
  
  { path:'user/:userid/contact/:contactid/contactinfo/register', component:AddContactinfoComponent },
  { path:'user/:userid/contact/:contactid/contactinfo/viewAll', component:ViewAllContactinfoComponent },
  { path:'user/:userid/contact/:contactid/contactinfo/view/:id', component:ViewContactinfoComponent },
  { path:'user/:userid/contact/:contactid/contactinfo/update/:id', component:UpdateContactinfoComponent },

  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
