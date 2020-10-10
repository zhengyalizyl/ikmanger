import React, { Component } from 'react'
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import liao from "./images/liao.jpg";
 class ErrorPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <Link to="/">
                        <img  src={liao} style={{width:'500px'}}/>
                        <h3 className="text-primary">
                            哎呀，迷路了，点我返回首页喔
                        </h3>
                    </Link>
                </div>
            </div>
        )
    }
}
export default ErrorPage;