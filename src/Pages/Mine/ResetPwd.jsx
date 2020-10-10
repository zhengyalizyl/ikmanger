import React, { Component } from 'react'
import {Link  } from "react-router-dom";
import md5 from "md5";
import {editPwdData  } from "./../../Api/index";
const  S_KEY="WaYjH1314.ItLikeE.CoM";
let userData =JSON.parse(sessionStorage.getItem("userData"));
 class Reset extends Component {
     constructor(props){
         super(props);
         userData= JSON.parse(sessionStorage.getItem("userData"))
         this.state={
                token:userData.token||"",
                old_pwd:'',
                new_pwd:'',
                re_pwd:''
         }
     }
    render() {
        const {old_pwd,new_pwd,re_pwd}=this.state;
        return (
            <div className="container-fluid">
            <div className="body">
                <div className="repass">
                    <div action="" className="form-horizontal col-md-offset-2">
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">原密码</label>
                            <div className="col-md-4">
                                <input 
                                type="text" 
                                value={old_pwd}
                                className="form-control input-sm"
                                onChange={(e)=>this._inputValue(e,"old_pwd")}
                                 />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">新密码</label>
                            <div className="col-md-4">
                                <input 
                                value={new_pwd}
                                type="password" 
                                className="form-control input-sm"
                                onChange={(e)=>this._inputValue(e,"new_pwd")}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">确认密码</label>
                            <div className="col-md-4">
                                <input 
                                value={re_pwd}
                                type="password" 
                                className="form-control input-sm"
                                 onChange={(e)=>this._inputValue(e,"re_pwd")}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <button 
                                   onClick={()=>this._onSubmit()}
                                     className="btn btn-success btn-danger  pull-right" 
                                >修 改</button>
                                <button  onClick={()=>this.props.history.goBack()}
                                 className="btn btn-success btn-warning pull-right" 
                                  style={{marginRight: "10px"}}>返回
                                      </button>

                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    _inputValue(e,type){
            this.setState({
                [type]:e.target.value
            })
    }
    _onSubmit(){
        console.log(this.state);
        const {old_pwd,new_pwd,re_pwd,token}=this.state;
        if(!old_pwd&&!new_pwd){
            alert("输入的密码不能为空");
            return 
        }
        if(re_pwd!==new_pwd){
            alert("两次输入密码不一致");
            return ;
        }
        if(old_pwd==new_pwd){
            alert("新旧密码一样");
            return ;
        }
  
        const md5_new_pwd= md5(new_pwd+S_KEY);
        const md5_old_pwd= md5(old_pwd+S_KEY);
        console.log(md5_new_pwd,md5_old_pwd)
        let url=new URLSearchParams();
       url.append("new_pwd",md5_new_pwd)
       url.append("old_pwd",md5_old_pwd)
       url.append("token",token)
        editPwdData(url)
        .then(res=>{
            if(res.status_code==200){
                alert("修改密码成功");
                //删除本地记录，并返回首页重新登录
                sessionStorage.removeItem("userData");
                this.props.history.push("/login")
            }
            console.log(res)
        })
        .catch(err=>{
            alert("操作有误")
        })
    }
}

export default Reset;