import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private URL='http://localhost:8080/api/v1/contactapp/user';
  // private URL='http://localhost:4000/api/v1/contactApp/user';

  constructor(private http: HttpClient) {}

  viewContacts(userid:string) {
    console.log("in VCS");
    const url = `${this.URL}/${userid}/contact/`;
    console.log(url);
    return this.http.get(url);
  }

  saveContact(data: any, uid:string) {
    const url = `${this.URL}/`+uid+`/contact/`;
    console.log("====",url);
    return this.http.post(url, data);
  }

  updateContact(data:any, userid:string, contactid:string){
    const url = `${this.URL}/${userid}/contact/${contactid}`;
    return this.http.put(url,data);
  }

  deleteContact(uid:string, id:string){
    const url = `${this.URL}/${uid}/contact/`+id;
    return this.http.delete(url);
  }

  viewContact(userid:string, contactid:string){
    const url = `${this.URL}/${userid}/contact/`+contactid;
    return this.http.get(url);
  }
}
