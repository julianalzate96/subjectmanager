import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  Signin(form: NgForm){
    this.userService.Signin(form.value)
      .subscribe(res => {
        this.router.navigate(['/login']);
      })
      this.resetForm(form);     
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();      
    }
  }

}
