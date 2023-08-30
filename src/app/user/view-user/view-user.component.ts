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
  term :any;
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

  onDeleteClick(userID : string){
    console.log('deleted user :', userID);
    this.usersData.deleteUser(userID).subscribe();
    alert("user : "+userID+" deleted successfully")
    this.router.navigate(['home']);
  }

  // onViewClick(userID: string){
  //   console.log("from view, id: ", userID);
  //   this.router.navigate(['user/view', userID]);
  // }
}
