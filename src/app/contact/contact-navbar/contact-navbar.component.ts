import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-contact-navbar',
  templateUrl: './contact-navbar.component.html',
  styleUrls: ['./contact-navbar.component.css']
})
export class ContactNavbarComponent {
  constructor(private authService: LoginService) {}

  logout(): void {
    this.authService.logout();
  }
}
