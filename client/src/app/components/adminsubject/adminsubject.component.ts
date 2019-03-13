import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsubject',
  templateUrl: './adminsubject.component.html',
  styleUrls: ['./adminsubject.component.css']
})
export class AdminsubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {
    this.GetSubjects();
  }

  Addsubject(form: NgForm){
    this.subjectService.AddSubject(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.router.navigate(['/profile']);
      });
  }

  GetSubjects(){
    this.subjectService.getSubjects()
      .subscribe(res => {
        this.subjectService.subjects = res as Subject[];
      })
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();      
    }
  }

}
