import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(
    private userData: UserService
    ) { }
  addUser = new FormGroup({
    fullname : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl('')
  })
  getUserFormData() {
    console.log(this.addUser.value);
    this.userData.saveUser(this.addUser.value).subscribe((result) => {
      console.log(result);
    })
  }
  onSubmit(){
    alert("user registered successfully");
  }
}
