import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];

  authToken: string;
  user: User;

  readonly URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User('','','');
  }

  /*Signin(user :User){
    return this.http.post(this.URL, user);
  }*/

  /*Login(user: User){
    return this.http.post(this.URL + `/authenticate`, user);
  }*/

  Signin(user :User){
    let headers = new HttpHeaders();
    headers.append('Conten-Type','application/json');
    return this.http.post(this.URL + `/register`, user, {headers: headers});
  }

  Login(user: User){
    let headers = new HttpHeaders();
    headers.append('Conten-Type','application/json');
    return this.http.post(this.URL + `/authenticate`, user, {headers: headers});
  }

  StoreUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  Validate(){
    console.log(localStorage.getItem('user'));  
    console.log(this.user); 
  }
 
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  } 

  getProfile(){
    
    this.loadToken();
    /*const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });*/
    let headers = new HttpHeaders().append('Authorization',this.authToken).append('Conten-Type','application/json');
    console.log(this.authToken);
    return this.http.get(this.URL + `/profile`, {headers: headers});
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
