import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-ci-navbar',
  templateUrl: './ci-navbar.component.html',
  styleUrls: ['./ci-navbar.component.css']
})
export class CiNavbarComponent {
  constructor(private authService: LoginService) {}

  logout(): void {
    this.authService.logout();
  }
}
