import React, { Component } from 'react'
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import DocentAdd from './DocentAdd';
import DocentList from './DocentList';
import DocentEdit from "./DocentEdit";
class DocentRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/docent/add" component={DocentAdd}></Route>
                <Route path="/docent/list" component={DocentList}></Route>
                <Route path="/docent/edit" component={DocentEdit}></Route>
                <Redirect exact from="/docent" to="/docent/list"></Redirect>
            </Switch>
        )
    }
}
export default DocentRouter;