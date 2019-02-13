import { TeacherlistComponent } from "./teacherlist/teacherlist.component";
import { AddteacherComponent } from "./addteacher/addteacher.component";

export const teacherroutes = [
    {
        path:'teacher/teacherList',
        component:TeacherlistComponent
    },
    {
        path:'teacher/addTeacher',
        component:AddteacherComponent
    }
]