import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(
    private route: ActivatedRoute,
    private contactservice : ContactService
  ) { }
  
  userID: any;
  
  addContact = new FormGroup({
    userrefer : new FormControl(''),
    contactname : new FormControl('')
  })
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
    });
    this.addContact.patchValue({
      userrefer : this.userID // You can set a default password value here if needed
    });
  }
  getUserFormData() {
    console.log(this.addContact.value);
    this.contactservice.saveContact(this.addContact.value,this.userID).subscribe((result) => {
      console.log(result);
    })
  }
  onSubmit(){
    alert("contact created successfully");
  }
}
