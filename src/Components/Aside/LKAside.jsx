import React, { Component } from 'react'
import avater from "./../../Common/uploads/avatar.png"
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import { connect } from "react-redux";
const IMG_PRE = "http://localhost:1688/uploads/";
class LKAside extends Component {
    constructor(props){
        super(props);
        this.state={
            selected_flag:'one'
        }
    }
    render() {
        const {real_name}=this.props.userData ;
        const icon_url=this.props.userData.icon_url||"";
        const {selected_flag}=this.state;
        return (
          <div>
                <div className="aside">
                    <div className="profile">
                        <div className="avatar img-circle">
                        <img src={icon_url.includes("undefined")?avater:IMG_PRE+icon_url}/>
                </div>
                            <h4>{real_name}</h4>
                        </div>
                        <div className="navs">
                            <ul className="list-unstyled">
                                <li>
                                    <Link onClick={()=>{this._dealWithClick('one')}} to="/" className={selected_flag=='one'?'active':''}>
                                        <i className="fa fa-area-chart"></i>
                                        数据分析
                        </Link>
                                </li>
                                <li>
                                    <Link to="/user" onClick={()=>{this._dealWithClick('two')}}  className={selected_flag=='two'?'active':''}>
                                        <i className="fa fa-users"></i>
                                        用户中心
                        </Link>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={()=>{this._dealWithClick('three')}}  className={selected_flag=='three'?'active':''}>
                                        <i className="fa fa-object-group"></i>
                                        课程管理
                            <i className="arrow fa fa-angle-right"></i>
                                    </a>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="/course/add">
                                                课程添加
                                </Link>
                                        </li>
                                        <li>
                                            <Link to="/course/list">
                                                课程列表
                                </Link>
                                        </li>
                                        <li>
                                            <Link to="/course/cateory">
                                                课程分类
                                </Link>
                                        </li>
                                        <li>
                                            <Link to="/course/topic">
                                                课程专题
                                </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/docent" onClick={()=>{this._dealWithClick('four')}}  className={selected_flag=='four'?'active':''}>
                                        <i className="fa fa-bars"></i>
                                        运营中心
                        </Link>
                                </li>
                                <li>
                                    <Link to="/sowing" onClick={()=>{this._dealWithClick('five')}} className={selected_flag=='five'?'active':''}>
                                        <i className="fa fa-calculator"></i>
                                        轮播图中心
                        </Link>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={()=>{this._dealWithClick('six')}}  className={selected_flag=='six'?'active':''}>
                                        <i className="fa fa-cog"></i>
                                        设置中心
                            <i className="arrow fa fa-angle-right"></i>
                                    </a>
                                    <ul className="list-unstyled">
                                        <li><Link to="javascript:;">站点设置</Link></li>
                                        <li><Link to="javascript:;">用户设置</Link></li>
                                        <li><Link to="javascript:;">角色管理</Link></li>
                                        <li><Link to="javascript:;">课程设置</Link></li>
                                        <li><Link to="javascript:;">运营设置</Link></li>
                                        <li><Link to="javascript:;">财务设置</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    )
                }

                _dealWithClick(type){
                    this.setState({
                        selected_flag:type
                    })
                }
            }

const mapStateToProps=(state)=>{
    return {
       userData:state.userData 
    }
}

export default connect(mapStateToProps,null)(LKAside);