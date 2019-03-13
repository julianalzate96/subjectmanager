import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result: Result;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.logout();
  }

  /*Login(form: NgForm){
    console.log(form.value);
    this.userService.Login(form.value)
      .subscribe(res => {
        console.log(res);
      })
  }*/

  Login(form: NgForm) {
    this.userService.Login(form.value)
      .subscribe(res => {
        this.result = res as Result;
        if (this.result.success) {
          this.userService.StoreUserData(this.result.token, this.result.user);
        }else{
          console.log(this.result.msg);
          this.resetForm(form);
          alert(this.result.msg);
        }
      });
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();      
    }
  }

  profile(){
    this.userService.getProfile()
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  }

  logout(){
    this.userService.logout();
  }

}
