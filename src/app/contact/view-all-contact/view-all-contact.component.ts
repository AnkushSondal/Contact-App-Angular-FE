import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-view-all-contact',
  templateUrl: './view-all-contact.component.html',
  styleUrls: ['./view-all-contact.component.css']
})
export class ViewAllContactComponent {
  contactData: any;
  userID:any;
  term : any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactservice : ContactService
    ) {
      // contactservice.viewContacts(this.userID).subscribe((data) => this.contactData = data);
      // console.log("===================",this.userID);
      
  }
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
    });
    console.log("view contact for user: ",this.userID);
    // this.contactservice.viewContacts(this.userID).subscribe((data) => this.contactData = data);
    this.viewContacts()
    
    // console.log(this.contactData);
  }

  viewContacts(){
    console.log("=================",this.userID);
    this.contactservice.viewContacts(this.userID).subscribe((data) => this.contactData = data);
  }

  onUpdateClick(contactID : string){
    console.log("from view, cid: ", contactID);
    this.router.navigate(['user/'+this.userID+'/contact/update/'+contactID]);
  }

  onDeleteClick(contactID : string){
    console.log('deleted contact :', contactID);
    this.contactservice.deleteContact(this.userID,contactID).subscribe();
    alert("contact : "+contactID+" deleted successfully")
    location.reload();
    this.router.navigate(['user/'+this.userID+'/contact/viewAll']);
  }
  onViewClick(contactID: string){
    console.log("from view, cid: ", contactID);
    this.router.navigate(['user/'+this.userID+'/contact/view/'+contactID]);
  }
}
