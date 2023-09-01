import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  user: any ;
  userID: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersData : UserService
    ) {
    // usersData.viewUser(this.userID).subscribe((data) => this.user = data);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('id');
    });
    console.log('Received ID:', this.userID);
    this.usersData.viewUser(this.userID).subscribe((data) => this.user = data);
  }

  onUpdateClick(userID : string){
    console.log("from view, id: ", userID);
    this.router.navigate(['user/update', userID]);
  }
  
  onDeleteClick(user : any){
    console.log('deleted user :', user.FullName);
    this.usersData.deleteUser(user.ID).subscribe();
    alert("user : "+user.FullName+" deleted successfully")
    this.router.navigate(['/']);
  }


}
