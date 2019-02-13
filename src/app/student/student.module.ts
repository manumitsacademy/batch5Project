import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { RouterModule} from '@angular/router';
import { studentroutes } from './student.routes'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(studentroutes)
  ],
  declarations: [StudentlistComponent, AddstudentComponent, StudentdetailsComponent]
})
export class StudentModule { }
