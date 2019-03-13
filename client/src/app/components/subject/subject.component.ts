import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';
import { NgForm } from '@angular/forms';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  _idsubject;
  subject = {} as Subject;

  constructor(private rutaActiva: ActivatedRoute, private subjectService: SubjectService) {
    this._idsubject = this.rutaActiva.snapshot.params._id;
   }

  ngOnInit() {
    this.infoSubject();
    this.getTest();
  }

  infoSubject(){
    this.subjectService.getSubject(this._idsubject)
      .subscribe(res => {
        this.subject = res as Subject;
      })
  }

  addtest(form: NgForm){
    const prom = parseFloat(this.subject.prom) + ((parseFloat(form.value.percent)/100)*parseFloat(form.value.note));
    this.subjectService.addtest(this._idsubject, form.value)
      .subscribe(res => {
        console.log(res);
        this.getTest();
        this.subjectService.UpdateProm(this._idsubject, prom.toString())
          .subscribe(res => {
            console.log(res);
          })
        this.resetForm(form);
        this.ngOnInit();
      })   
  }

  getTest(){
    this.subjectService.getTest(this._idsubject)
      .subscribe(res => {
        this.subjectService.tests = res as Test[];
      })
  }

  deleteTest(test: Test){
    const prom = parseFloat(this.subject.prom) - ((parseFloat(test.percent)/100)*parseFloat(test.note));
    this.subjectService.DeleteTest(test._id)
      .subscribe(res => {
        console.log(res);
        this.subjectService.UpdateProm(this._idsubject, prom.toString())
          .subscribe(res => {
            console.log(res);
          })  
        this.ngOnInit();
      })
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();      
    }
  }
}
