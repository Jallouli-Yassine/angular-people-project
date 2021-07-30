import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  private deleteUserUrl = "http://localhost:3000/user/deleOne/";
  private getAllUsersUrl = "http://localhost:3000/user/all";
  private deleteAllUsersUrl = "http://localhost:3000/user/deleteAll";
  private addUserUrl = "http://localhost:3000/user/register";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id);
  }

  deleteAllUsers() {
    return this.http.delete<any>(this.deleteAllUsersUrl);
  }
  addUserD(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

}
