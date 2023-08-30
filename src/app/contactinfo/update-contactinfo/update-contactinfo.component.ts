import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-update-contactinfo',
  templateUrl: './update-contactinfo.component.html',
  styleUrls: ['./update-contactinfo.component.css']
})
export class UpdateContactinfoComponent {
  userID:any;
  contactinfo: any;
  ciID : any;
  contactID: any;
  constructor(
    private route: ActivatedRoute,
    private contactinfoservice: ContactinfoService,
    ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
      this.contactID = params.get('contactid');
      this.ciID=params.get('id')

      console.log('Received ID:', this.userID);
      this.contactinfoservice.viewContactinfo(this.contactID,this.ciID).subscribe((data) => {
        this.contactinfo = data;
        this.updateContact.patchValue({
          contactrefer : this.contactinfo.ContactRefer,
          citype : this.contactinfo.CIType,
          civalue : this.contactinfo.CIValue,
        });
      });
    });
  }
  
  updateContact = new FormGroup({
    citype : new FormControl(''),
    civalue : new FormControl(''),
    contactrefer : new FormControl('')
  })

  getUserFormData() {
    console.log(this.updateContact.value);
    if(this.userID)
    this.contactinfoservice.updateContact(this.updateContact.value,this.contactID,this.ciID).subscribe((result) => {
      console.log(result);
    })
  }

  onSubmit(){
    alert("User updated successfully")
  }
}
