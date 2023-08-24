import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component'
import { ViewUserComponent } from './user/view-user/view-user.component'
import { UpdateUserComponent } from './user/update-user/update-user.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home',component:HomeComponent },
  { path:'user/viewAll',component:ViewUserComponent },
  { path:'user/register',component:AddUserComponent },
  { path:'user/update/:id',component:UpdateUserComponent },

  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
