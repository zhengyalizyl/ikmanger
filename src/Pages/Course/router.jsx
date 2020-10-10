import React, { Component } from 'react'
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import CourseAdd from "./CourseAdd";
import CourseCateory from "./CourseCateory";
import CourseCateoryAdd from "./CourseCateoryAdd";
import CourseCateoryEdit from "./CourseCateoryEdit";
import CourseList from "./CourseList";
import CourseTopic from "./CourseTopic";
import CourseAddOne from "./CourseAddOne";
import CourseAddTwo from "./CourseAddTwo";
import CourseAddThree from "./CourseAddThree";
 class CourseRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/course/cateory" component={CourseCateory}></Route>
                <Route path="/course/cateory_add" component={CourseCateoryAdd}></Route>
                <Route path="/course/cateory_edit" component={CourseCateoryEdit}></Route>
                <Route path="/course/topic" component={CourseTopic}></Route>
                <Route path="/course/list" component={CourseList}></Route>
                <Route path="/course/add" component={CourseAdd}></Route>
                <Route path="/course/add_one" component={CourseAddOne}></Route>
                <Route path="/course/add_two" component={CourseAddTwo}></Route>
                <Route path="/course/add_three" component={CourseAddThree}></Route>
                <Redirect exact from="/course" to="/course/list"></Redirect>
            </Switch>
        )
    }
}
export default CourseRouter;