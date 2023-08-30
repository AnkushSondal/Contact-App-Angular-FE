import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-view-all-contactinfo',
  templateUrl: './view-all-contactinfo.component.html',
  styleUrls: ['./view-all-contactinfo.component.css']
})
export class ViewAllContactinfoComponent {
  contactInfoData: any;
  userID:any;
  contactID:any;
  term :any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactinfoservice : ContactinfoService
    ) {
      // contactservice.viewContacts(this.userID).subscribe((data) => this.contactData = data);
      // console.log("===================",this.userID);
      
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
      this.contactID=params.get('contactid')
    });
    console.log("view contact for user: ",this.userID);
    // this.contactservice.viewContacts(this.userID).subscribe((data) => this.contactData = data);
    this.viewContacts()
    // console.log(this.contactData);
  }

  viewContacts(){
    console.log("=================",this.userID);
    this.contactinfoservice.viewContactInfos(this.contactID).subscribe((data) => this.contactInfoData = data);
  }

  onUpdateClick(contactinfoID : string){
    console.log("from view, cid: ", contactinfoID);
    this.router.navigate(['user/'+this.userID+'/contact/'+this.contactID+'/contactinfo/update/'+contactinfoID]);
  }

  onDeleteClick(contactinfoID : string){
    console.log('deleted contact info :', contactinfoID);
    this.contactinfoservice.deleteContact(this.contactID,contactinfoID).subscribe();
    alert("contact : "+contactinfoID+" deleted successfully")
    this.router.navigate(['home']);
  }
  onViewClick(contactinfoID: string){
    console.log("from view, cid: ", contactinfoID);
    this.router.navigate(['user/'+this.userID+'/contact/'+this.contactID+'/contactinfo/view/'+contactinfoID]);
  }
}
