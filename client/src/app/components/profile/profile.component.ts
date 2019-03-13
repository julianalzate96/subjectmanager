import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  subjects: Object;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(){
    this.subjectService.getSubjects()
      .subscribe(res => {
        this.subjectService.subjects = res as Subject[];
        this.subjects = res;
      }, err => {
        console.log(err);
      })
  }

  deleteSubject(subject: Subject){
    this.subjectService.DeleteSubject(subject._id)
      .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      })
  }

}
