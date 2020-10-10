import React, { Component } from 'react'
import logo from "./../../Common/uploads/logo.jpg";
import {connect} from "react-redux"
import { getUserDataAction } from "../../Store/actionCreator";
import LKNotice from './../../Components/LKTool/LKNotice'
import md5 from "md5";
const  S_KEY="WaYjH1314.ItLikeE.CoM";
 class Login extends Component {
   
    constructor(props){
        super(props);
        this.state={
            user_name:'',
            user_pwd:'',
            tipsContent:''
        }
    }

 
    render() {
        return (
            <div className="login">
        <div className="login-wrap">
            <div className="avatar">
                <img src={logo} className="img-circle" alt="" />
            </div>
            <div action="" className="col-md-offset-1 col-md-10">
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-id-card-o"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="用户名" 
                        onChange={(e)=>this._onInputChange(e,"user_name")}
                        onKeyDown={(e)=>this._onInputKeyUp(e)}
                        />
                </div>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-key"></i>
                    </span>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="密码" 
                    onChange={(e)=>this._onInputChange(e,"user_pwd")}
                    onKeyDown={(e)=>this._onInputKeyUp(e)}
                    />
                </div>
                <button type="submit" onClick={()=>this._onSubmit()} className="btn btn-lg btn-danger btn-block">登 录</button>
            </div>
        </div>
        <LKNotice tipsContent={this.state.tipsContent}></LKNotice>
    </div>
        )
    }

    _onInputChange(e,type){
          
            let inputValue=e.target.value;
            this.setState({
                [type]:inputValue
            })
            
    }

    _onInputKeyUp(e){

        if(e.keyCode==13){
            this._onSubmit();
        }
    }
    _onSubmit(){
        //获取数据
        const {user_name,user_pwd}=this.state;
        //验证数据
        if(!user_name){
            this.setState({
                tipsContent:'输入的口令不能为空'
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        tipsContent:''  
                    })
                },3000)
            })
        
            return;
        }
        if(!user_pwd){
            this.setState({
                tipsContent:'输入的密码不能为空'
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        tipsContent:''  
                    })
                },3000)
            })
            return
        }
        console.log(user_pwd)
       const md5_user_pwd= md5(user_pwd+S_KEY);
       let params=new URLSearchParams();
       params.append("user_name",user_name);
       params.append("user_pwd",md5_user_pwd)
       console.log(params.get("md5_user_pwd"))
           this.props.reqLogin(params,(userData)=>{
               console.log(userData)
               if(userData.token&&userData.token!==""){
                  this.setState({
                    tipsContent:'登录成功，正在前往主页面...'
                },()=>{
                    setTimeout(()=>{
                        this.setState({
                            tipsContent:''  
                        })
                        this.props.history.push("/")
                    },3000)

                })
                  console.log(this.props)
                   
               }else{
                this.setState({
                    tipsContent:'密码或者用户名错误'
                },()=>{
                    setTimeout(()=>{
                        this.setState({
                            tipsContent:''  
                        })
                    },3000)

                })
               }
           })
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        reqLogin(data,callback){
            const action=getUserDataAction(data,callback);
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Login);