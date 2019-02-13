import { StudentlistComponent } from "./studentlist/studentlist.component";
import { AddstudentComponent } from "./addstudent/addstudent.component";

export const studentroutes = [
    {
        path:'student/studentList',
        component:StudentlistComponent
    },
    {
        path:'student/addStudent',
        component:AddstudentComponent
    }
]