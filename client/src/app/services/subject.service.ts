import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from '../models/subject';
import { Test } from '../models/test';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  authToken: string;
  prom;
  selectedSubject: Subject;
  subjects: Subject[];
  selectedTest: Test;
  tests: Test[];

  readonly URL = 'http://localhost:3000/subject'

  constructor(private http: HttpClient, private userService: UserService) { 
    this.selectedSubject = new Subject('','','','','');
    this.selectedTest = new Test('','','','');
  }

  /*Login(user: User){
    let headers = new HttpHeaders();
    headers.append('Conten-Type','application/json');
    return this.http.post(this.URL + `/authenticate`, user, {headers: headers});
  }*/

  getSubjects(){
    let headers = new HttpHeaders();
    //this.authToken = this.userService.loadToken();
    console.log(this.authToken);
    headers.append('Authorization',this.authToken);
    headers.append('Conten-Type','application/json');
    return this.http.get(this.URL, {headers: headers});
  }

  getSubject(_id){
    return this.http.get(this.URL + `/${_id}`);
  }

  AddSubject(subject: Subject){
    return this.http.post(this.URL, subject);
  }
  
  addtest(_id, test: Test){
    return this.http.post(this.URL + `/${_id}`, test);
  }

  getTest(_id){
    return this.http.get(this.URL + `/test/${_id}`);
  }

  UpdateProm(_id, prom: string){
    return this.http.put(this.URL + `/${_id}`, { prom });
  }

  DeleteTest(_id){
    return this.http.delete(this.URL + `/${_id}`);
  }

  DeleteSubject(_id){
    return this.http.delete(this.URL + `/subject/${_id}`);
  }
}
