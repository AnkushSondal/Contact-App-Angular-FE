import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(
    private userData: UserService,
    private router: Router,

    ) { }
  addUser = new FormGroup({
    fullname : new FormControl(''),
    // firstname : new FormControl(''),
    // lastname : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl('')
  })
  getUserFormData() {
    console.log(this.addUser.value);
    this.userData.saveUser(this.addUser.value).subscribe(response => {
      console.log('POST request successful:', response);
    },
    error => {
      console.error('POST request error:', error);
    }
    );
    this.router.navigate(['/']);
  }
  onSubmit(){
    alert("user registered successfully");
  }

  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
