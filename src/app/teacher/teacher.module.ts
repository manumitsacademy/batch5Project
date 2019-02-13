import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { RouterModule } from '@angular/router';
import { teacherroutes } from './teacher.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(teacherroutes)
  ],
  declarations: [TeacherlistComponent, AddteacherComponent, TeacherDetailsComponent]
})
export class TeacherModule { }
