import React,{ Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Link,Route } from "react-router-dom";

class LkHeader extends Component {
      render(){
              return (
              <div className="header">
                            <nav className="navbar navbar-custom">
                            <div className="navbar-header">
                            <a href="javascript:;" className="navbar-brand">撩课教育后台管理系统</a>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                            <li><a href="javascript:;"><i className="fa fa-cloud-upload"></i>教育云中心</a></li>
                            <li><a href="javascript:;"><i className="fa fa-yelp"></i>分销中心</a></li>
                            <li><a href="javascript:;"><i className="fa fa-xing"></i>CRM对接中心</a></li>
                            <li><Link to="/mine"><i className="fa fa-user"></i>个人中心</Link></li>
                            <li><a href="javascript:;"><i className="fa fa-bell"></i><span className="badge">20</span></a></li>
                            <li>
                                <a style={{cursor:'pointer'}} href="javascript:;" onClick={()=>this._logOut()}>
                                    <i className="fa fa-sign-out"></i>
                                    退出
                                </a>
                            </li>
                            </ul>
                            </nav>
              </div>
              )
              }

              _logOut(){
                  //清空本地数据
                  sessionStorage.removeItem("userData");
                  //回到首页,因为LKHeader不在layout中的路由里，所以不能用this.props.history.push的方法
                    window.location.href="/";
              }
}

export default LkHeader;
