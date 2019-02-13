import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourselistComponent } from './courselist/courselist.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { RouterModule } from '@angular/router';
import { courseroutes } from './course.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(courseroutes)
  ],
  declarations: [CourselistComponent, AddcourseComponent, CoursedetailsComponent]
})
export class CourseModule { }
