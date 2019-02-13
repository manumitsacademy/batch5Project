import { CourselistComponent } from "./courselist/courselist.component";
import { AddcourseComponent } from "./addcourse/addcourse.component";


export const courseroutes = [
    {
        path:'course/courseList',
        component:CourselistComponent
    },
    {
        path:'course/addCourse',
        component:AddcourseComponent
    }
]