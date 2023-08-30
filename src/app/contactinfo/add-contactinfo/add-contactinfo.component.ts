import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-add-contactinfo',
  templateUrl: './add-contactinfo.component.html',
  styleUrls: ['./add-contactinfo.component.css']
})
export class AddContactinfoComponent {
  constructor(
    private route: ActivatedRoute,
    private contactinfoservice : ContactinfoService
  ) { }
  
  contactID: any;
  userID:any;
  
  addContactInfo = new FormGroup({
    contactrefer : new FormControl(''),
    CIType : new FormControl(''),
    CIValue : new FormControl(''),
  })
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid')
      this.contactID = params.get('contactid');
    });

    this.addContactInfo.patchValue({
      contactrefer : this.contactID // You can set a default password value here if needed
    });
  }
  getUserFormData() {
    console.log(this.addContactInfo.value);
    this.contactinfoservice.saveContact(this.addContactInfo.value,this.contactID).subscribe((result) => {
      console.log(result);
    })
  }
  onSubmit(){
    alert("contact created successfully");
  }
}
