import React,{Component} from 'react';
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, Link,Route,Switch,Redirect } from "react-router-dom";
import Layout from "./Components/Layout/index";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Mine/Login";
import UserRouter from "./Pages/User/router";
import MineRouter from "./Pages/Mine/router";
import SowingRouter from "./Pages/Sowing/router";
import CourseRouter from "./Pages/Course/router";
import DocentRouter from "./Pages/Docent/router";
import ErrorPage from "./Pages/ErrorPage/index"
import {connect} from "react-redux"
import * as constants from "./Store/actionTypes"

//登录之后不能跳转到主页面是因为Login.jsx里面
//有句代码this.props.history.push("/")把app.js里面的reducer的userData数据清掉了,
//所以这里需要引入connect,在reduce里面得有userData值,不会触发render重新渲染
class App extends Component {
  componentWillMount(){
   this.props.reqLocalData();
  }
  render(){


    //主面板
    let LayoutRouter=(
      <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/mine" component={MineRouter}></Route>
            <Route  path="/user" component={UserRouter}></Route>
            <Route  path="/sowing" component={SowingRouter}></Route>
            <Route  path="/course" component={CourseRouter}></Route>
            <Route  path="/docent" component={DocentRouter}></Route>
            <Route  component={ErrorPage}/>
          </Switch>
      </Layout>
    )
  return (
    
      <BrowserRouter> 
      <Switch>
        
            {/* <Route path="/" exact render={props=>LayoutRouter}></Route>
            <Route path="/login" component={Login}></Route> */}
            <Route exact path="/" render={this.props.userData?props=>LayoutRouter:()=><Redirect to="/login"/>}/>
            <Route path="/login" component={Login}></Route>
           <Route path="/"  render={props=>LayoutRouter}></Route>
          </Switch>
          
      </BrowserRouter>
   
  );
  }
}

const mapStateToProps=(state)=>{

    return {
      userData:state.userData
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      reqLocalData(){
        const userData=JSON.parse(sessionStorage.getItem("userData"));
        dispatch({
          type: constants.IINIT_USER_DATA,
          userData
      })
      }
  }
}

// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);
