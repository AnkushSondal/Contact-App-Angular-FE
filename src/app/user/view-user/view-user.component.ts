import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  userData: any;
  constructor(
    private router: Router,
    private usersData : UserService, 
    ) {
    usersData.viewUsers().subscribe((data) => this.userData = data);
  }

  onUpdateClick(userID : string){
    console.log("from view, id: ", userID);
    this.router.navigate(['user/update', userID]);
  }

  onDeleteClick(user : any){
    console.log('deleted user :', user.FullName);
    this.usersData.deleteUser(user.ID).subscribe();
    alert("user : "+user.FullName+" deleted successfully")
    this.router.navigate(['home']);
  }
}
