import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminsubjectComponent } from './components/adminsubject/adminsubject.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'profile', component: ProfileComponent},
  {path:'signin', component: SigninComponent},
  {path:'login', component: LoginComponent},
  {path:'Adminsubject', component: AdminsubjectComponent},
  {path:'subject/:_id', component: SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
