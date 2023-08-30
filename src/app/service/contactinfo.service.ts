import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {
  private URL='http://localhost:8080/api/v1/contactapp';

  constructor(private http: HttpClient) { }

  viewContactInfos(contactId:string) {
    console.log("in VCS");
    const url = `${this.URL}/contact/${contactId}/contactinfo/`;
    console.log(url);
    return this.http.get(url);
  }

  saveContact(data: any, cid:string) {
    const url = `${this.URL}/contact/`+cid+`/contactinfo/register`;
    console.log("====",url);
    return this.http.post(url, data);
  }

  updateContact(data:any, cid:string, id:string){
    const url = `${this.URL}/contact/${cid}/contactinfo/${id}`;
    return this.http.put(url,data);
  }

  deleteContact(cid:string, id:string){
    const url = `${this.URL}/contact/${cid}/contactinfo/`+id;
    return this.http.delete(url);
  }

  viewContactinfo(cid:string, id:string){
    const url = `${this.URL}/contact/${cid}/contactinfo/`+id;
    return this.http.get(url);
  }
}
