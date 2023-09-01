import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm: FormGroup;
  constructor(

    // private userData: UserService
    private authService : LoginService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
     }
  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        if (response.token) {
          this.authService.setToken(response.token);
          const userId = response.id;
          console.log(response);
          
          if (response.isadmin=='1') {
            this.router.navigate(['admin']);
          } else{
            this.router.navigate(['user/view', userId]);
          }
        } else {
          alert("INVALID Login Details ")
        }
      },
      error => {
        alert("INVALID Login Details ")
      }
    );
  }
}
