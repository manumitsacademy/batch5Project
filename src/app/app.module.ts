import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { RouterModule } from '@angular/router';
import { TeacherModule } from './teacher/teacher.module';
import { SharedModule} from './shared/shared.module';
import { CourseModule } from './course/course.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    TeacherModule,
    SharedModule,
    CourseModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
