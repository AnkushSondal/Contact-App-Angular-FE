import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-view-contactinfo',
  templateUrl: './view-contactinfo.component.html',
  styleUrls: ['./view-contactinfo.component.css']
})
export class ViewContactinfoComponent {
  contact: any ;
  userID: any;
  contactID: any;
  ciID:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService : ContactinfoService
    ) {
    // usersData.viewUser(this.userID).subscribe((data) => this.user = data);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('userid');
      this.contactID=params.get('contactid'),
      this.ciID=params.get('id')

    });
    console.log('Received ID:', this.userID);
    this.contactService.viewContactinfo(this.contactID,this.ciID).subscribe((data) => this.contact = data);
  }

  onUpdateClick(ciID : string){
    console.log("from view, id: ", ciID);
    this.router.navigate(['user/'+this.userID+'/contact/'+this.contactID+'/contactinfo/update/'+ciID]);
  }
  
  onDeleteClick(ciID : string){
    console.log('deleted contact info :', ciID);
    this.contactService.deleteContact(this.contactID,ciID).subscribe();
    alert("contact : "+ciID+" deleted successfully")
    this.router.navigate(['home']);
  }
}
