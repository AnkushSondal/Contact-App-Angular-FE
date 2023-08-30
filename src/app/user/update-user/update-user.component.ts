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
  user: any;
  showPassword: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private userData: UserService,
    ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userIDtoUpdate = params.get('id');
      console.log('Received ID:', this.userIDtoUpdate);
      this.userData.viewUser(this.userIDtoUpdate).subscribe((data) => {
        this.user = data;
        this.updateUser.patchValue({
          fullname: this.user.FullName,
          username: this.user.Username,
          // lastname : this.user.lastname,
          // firstname : this.user.firstname,
          password: this.user.Password, // You can set a default password value here if needed
        });
      });
    });
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  updateUser = new FormGroup({
    fullname : new FormControl(''),
    // firstname : new FormControl(''),
    // lastname : new FormControl(''),
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
