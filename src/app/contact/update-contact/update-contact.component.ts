import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {
  userID:any;
  contact: any;
  showPassword: boolean = false;
  contactID: any;
  constructor(
    private route: ActivatedRoute,
    private contactservice: ContactService,
    ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
      this.contactID = params.get('id');
      console.log('Received ID:', this.userID);
      this.contactservice.viewContact(this.userID,this.contactID).subscribe((data) => {
        this.contact = data;
        this.updateContact.patchValue({
          userrefer : this.contact.UserRefer,
          contactname : this.contact.ContactName
        });
      });
    });
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  updateContact = new FormGroup({
    contactname : new FormControl(''),
    userrefer : new FormControl('')
  })

  getUserFormData() {
    console.log(this.updateContact.value);
    if(this.userID)
    this.contactservice.updateContact(this.updateContact.value,this.userID,this.contactID).subscribe((result) => {
      console.log(result);
    })
  }

  onSubmit(){
    alert("User updated successfully")
  }
}
