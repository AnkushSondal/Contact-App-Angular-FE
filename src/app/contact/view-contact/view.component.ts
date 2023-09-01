import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewContactComponent {
  contact: any ;
  userID: any;
  contactID: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService : ContactService
    ) {
    // usersData.viewUser(this.userID).subscribe((data) => this.user = data);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
      this.contactID=params.get('id')
    });
    console.log('Received ID:', this.userID);
    this.contactService.viewContact(this.userID,this.contactID).subscribe((data) => this.contact = data);
  }

  onUpdateClick(contactID : string){
    console.log("from view, id: ", contactID);
    this.router.navigate(['user/'+this.userID+'/contact/update/'+contactID]);
  }
  
  onDeleteClick(user : any){
    console.log('deleted user :', user.FullName);
    this.contactService.deleteContact(this.userID,this.contactID).subscribe();
    alert("user : "+user.FullName+" deleted successfully")
    this.router.navigate(['user/'+this.userID+'/contact/viewAll']);
  }
}
