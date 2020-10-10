import React, { Component } from 'react'
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import UserCenter from "./UserCenter";
import UserList from "./UserList";
 class UserRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/user/center"  component={UserCenter}/>
                <Route path="/user/list"  component={UserList}/>
                <Redirect exact from="/user"  to="/user/list"/>
            </Switch>
        )
    }
}
export default UserRouter;