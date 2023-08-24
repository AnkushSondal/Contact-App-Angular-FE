import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateUserComponent implements OnInit {
  userIDtoUpdate :any;
  constructor(
    private route: ActivatedRoute,
    private userData: UserService,
    ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userIDtoUpdate = params.get('id');
      console.log('Received ID:', this.userIDtoUpdate);
    });
  }
  
  updateUser = new FormGroup({
    fullname : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl('')
  })

  getUserFormData() {
    console.log(this.updateUser.value);
    if(this.userIDtoUpdate)
    this.userData.updateUser(this.updateUser.value,this.userIDtoUpdate).subscribe((result) => {
      console.log(result);
    })
  }

  onSubmit(){
    alert("User updated successfully")
  }
}
