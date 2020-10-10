import Home from "../Pages/Home/Home";
import User from "../Pages/User/UserList";
import Login from "../Pages/Mine/Login";
import Mine from "./../Pages/Mine/Mine";
import SowingList from "./../Pages/Sowing/SowingList";
import SowingAdd from "./../Pages/Sowing/SowingAdd";
import SowingEdit from "./../Pages/Sowing/SowingEdit";
import CourseAdd from "./../Pages/Course/CourseAdd"
import CourseCateory from "../Pages/Course/CourseCateory"
import CourseList from "./../Pages/Course/CourseList"
import CourseTopic from "./../Pages/Course/CourseTopic"
let routes=[
    {
        path:'/',component:Home,exact:true
    },
    {
        path:'/user',component:User
    },
    {
        path:'/mine',component:Mine
    },
    {
        path:'/login',component:Login
    },
    {
        path:'/sowing',component:SowingList
    },
    {
        path:'/sowingAdd',component:SowingAdd
    },
    {
        path:'/sowingedit',component:SowingEdit
    },
    {
        path:'/courseCateory',component:CourseCateory
    },
    {
        path:'/CourseList',component:CourseList
    },
    {
        path:'/courseTopic',component:CourseTopic
    },
    {
        path:'/courseAdd',component:CourseAdd
    }
]
export default routes;