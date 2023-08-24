import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL='http://localhost:8080/api/v1/contactapp/user';
  constructor(private http: HttpClient) {
  }
  viewUsers() {
    return this.http.get(this.URL);
  }
  saveUser(data: any) {
    const url = `${this.URL}/register`;
    return this.http.post(url, data);
  }
  updateUser(data:any, id:string){
    const url = `${this.URL}/`+id;
    return this.http.put(url,data);
  }

  deleteUser(id:string){
    const url = `${this.URL}/`+id;
    return this.http.delete(url);

  }
}
