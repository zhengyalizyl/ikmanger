import React, { Component } from 'react'
import icon from "./../../Common/images/default.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LKTool from "./../../Components/LKTool/LKTool";
import * as constants from "./../../Store/actionTypes"
import { editUserData } from "./../../Api/index";
const IMG_PRE = "http://localhost:1688/uploads/";
const _lktool=new LKTool();
console.log(1)
let userData =""
// let userData =JSON.parse(sessionStorage.getItem("userData"));
class Mine extends Component {
    constructor(props) {
        super(props);
       let  userData = JSON.parse(sessionStorage.getItem("userData"));
         console.log(userData)
        this.state = {
            token: userData.token || "",
            user_name: userData.user_name || "",
            real_name: userData.real_name || "",
            icon_url: IMG_PRE + userData.icon_url || "",
            sex: userData.sex || "",
            phone: userData.phone || "",
            e_email: userData.e_email || "",
            join_time: userData.join_time || "",
            intro_self: userData.intro_self || ""
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <div className="settings">
                        <div action="" className="form-horizontal">
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">姓名</label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control input-sm"
                                        value={this.state.real_name}
                                        onChange={(e) => { this._onInputChange(e, "real_name") }}
                                    />
                                    {/* <p className="form-control-static">旋之华</p> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">头像</label>
                                <div className="col-md-2 preview">
                                    <img
                                        src={this.state.icon_url.includes('undefined') ?icon :this.state.icon_url }
                                        style={{ border: `1px solid #e0e0e0;` }}
                                    />
                                    <input
                                        ref="icon_url"
                                        type="file"
                                        id="upfile"
                                        onChange={(e) => { this._onInputChange(e, "file") }}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">性别</label>
                                <div className="col-md-3">
                                    <label className="radio-inline">
                                        <input
                                            type="radio"
                                            checked={this.state.sex == "男"}
                                            onChange={(e) => { this._onInputChange(e, '男') }}
                                        /> 男
                                </label>
                                    <label className="radio-inline">
                                        <input
                                            type="radio"
                                            checked={this.state.sex == "女"}
                                            onChange={(e) => { this._onInputChange(e, '女') }}
                                        /> 女
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">用户名</label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control input-sm"
                                        value={this.state.user_name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">手机号码</label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control input-sm"
                                        value={this.state.phone}
                                        onChange={(e) => { this._onInputChange(e, "phone") }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">Email</label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control input-sm"
                                        value={this.state.e_email}
                                        onChange={(e) => { this._onInputChange(e, "e_email") }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">加入日期</label>
                                <div className="col-md-5">
                                    <input
                                        type="date"
                                        className="form-control input-sm"
                                        value={this.state.join_time.substr(0,10)}
                                        onChange={(e) => { this._onInputChange(e, "join_time") }}
                                    />
                                </div>
                            </div>
                            {/*  <div className="form-group">
                                <label for="" className="col-md-3 control-label">出生日期</label>
                                <div className="col-md-5">
                                    <input type="date" className="form-control input-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">住址</label>
                                <div className="col-md-5">
                                    <select name="" className="form-control input-sm">
                                        <option value="">安徽省</option>
                                        <option value="">江苏省</option>
                                        <option value="">广东省</option>
                                    </select>
                                    <select name="" className="form-control input-sm">
                                        <option value="">黄山市</option>
                                        <option value="">上海市</option>
                                        <option value="">广州市</option>
                                    </select>
                                    <select name="" className="form-control input-sm">
                                        <option value="">徽州区</option>
                                        <option value="">徐汇区</option>
                                        <option value="">天河区</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className="form-group">
                                <label for="" className="col-md-3 control-label">自我介绍</label>
                                <div className="col-md-5 ckeditor">
                                    <textarea
                                        name=""
                                        rows="15"
                                        className="form-control input-sm"
                                        value={this.state.intro_self}
                                        onChange={(e) => { this._onInputChange(e, "intro_self") }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button 
                                     className="btn btn-danger pull-right"
                                     onClick={()=>{this._onsubmit()}}
                                     >保 存</button>
                                    <Link to="/mine/reset" className="btn btn-link btn-success pull-right">修改密码？</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _onInputChange(e, type) {
        console.log(e.target.value)
        if(type=="男"){
            this.setState({
                sex: "男"
            }) 
        }    else if(type=="女"){
            this.setState({
                sex: "女"
            }) 
        }else if(type=="file"){
            _lktool.fileToBase64Url(e.target.files[0],(src)=>{
                this.setState({
                        icon_url: src
                })
            })
        }
        
        else {
            this.setState({
                [type]: e.target.value
            })
        }
       
    }

    _onsubmit(){
        
        //1.处理所有数据
        let formData=new FormData();
        formData.append('token',this.state.token)
        formData.append('user_name',this.state.user_name)
        formData.append('real_name',this.state.real_name)
        formData.append('icon_url',this.refs.icon_url.files[0]||userData.icon_url)
        formData.append('sex',this.state.sex)
        formData.append('phone',this.state.phone)
        formData.append('e_email',this.state.e_email)
        formData.append('join_time',this.state.join_time)
        formData.append('intro_self',this.state.intro_self)

        console.log(formData.get("icon_url"))

        editUserData(formData)
        .then((res)=>{
            if(res.status_code==200){
                this.props.refreshLocalUserData(res.result);
                this.props.history.push("/")
            }
            console.log(res)
        })
        .catch(error=>{
            console.error(error)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        refreshLocalUserData(userData){
            
            dispatch({
                type: constants.IINIT_USER_DATA,
                userData
            })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mine);
