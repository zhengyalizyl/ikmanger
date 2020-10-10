import React, { Component } from 'react';
import { addDocentData } from "./../../Api/index";
import md5 from "md5";
const  S_KEY="WaYjH1314.ItLikeE.CoM";
 class DocentAdd extends Component {
     constructor(props){
         super(props);
         this.state={
             user_name:'',
             password:'',
             employmentDate:'',
             sex:'',
             position:'讲师',
             nick_name:'',
                age:'',
                phone:'',
         }
     }
    render() {
        const { user_name,password,employmentDate,sex,position,nick_name,age,phone}=this.state;
        return (
            <div className="container-fluid">
            <div className="body teacher">
                <ol className="breadcrumb">
                    <li><a href="javascript:;">用户管理</a></li>
                    <li className="active">用户添加</li>
                </ol>
                <div className="teacher-add">
                    <div action="" className="form-horizontal col-md-offset-2">
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">姓名</label>
                            <div className="col-md-4">
                                <input 
                                type="text" 
                                value={user_name}
                                className="form-control input-sm" placeholder="用户名称"
                                onChange={(e)=>this._inputChange(e,'user_name')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">昵称</label>
                            <div className="col-md-4">
                                <input 
                                type="text" 
                                value={nick_name}
                                className="form-control input-sm" placeholder="用户昵称"
                                onChange={(e)=>this._inputChange(e,'nick_name')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">密码</label>
                            <div className="col-md-4">
                                <input
                                 type="password"
                                 value={password}
                                  className="form-control input-sm"
                                  onChange={(e)=>this._inputChange(e,'password')}
                                  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">年龄</label>
                            <div className="col-md-4">
                                <input 
                                type="text" 
                                value={age}
                                className="form-control input-sm" placeholder="年龄"
                                onChange={(e)=>this._inputChange(e,'age')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">入职时间</label>
                            <div className="col-md-4">
                                <input 
                                type="date"
                                value={employmentDate.substr(0,10)}
                                className="form-control input-sm"
                                onChange={(e)=>this._inputChange(e,'employmentDate')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">类型</label>
                            <div className="col-md-2">
                                <select 
                                name="" 
                                className="form-control input-sm"
                                value={position}
                                onChange={(e)=>this._inputChange(e,'position')}
                                >
                                    <option value="讲师">讲师</option>
                                    <option value="管理员">管理员</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">性别</label>
                            <div className="col-md-4">
                                <label className="radio-inline">
                                    <input 
                                    type="radio"
                                    checked={sex=='男'?true:false}
                                    onChange={(e)=>this._inputChange(e,'男')}
                                    /> 男
                                </label>
                                <label className="radio-inline">
                                    <input
                                     type="radio"
                                     checked={sex=='女'?true:false}
                                     onChange={(e)=>this._inputChange(e,'女')}
                                     /> 女
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-md-3 control-label">手机号码</label>
                            <div className="col-md-4">
                                <input 
                                type="text" 
                                value={phone}
                                className="form-control input-sm" placeholder="手机号码"
                                onChange={(e)=>this._inputChange(e,'phone')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <button 
                                className="btn btn-danger btn-sm pull-right"
                                onClick={()=>this._dealWithClick()}
                                > 添 加 </button>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    _inputChange(e,type){
        if(type=='女'||type=='男'){
            this.setState({
                sex:type
            })
        }else {
            this.setState({
                [type]:e.target.value
            })
        }
        console.log(this.state)
    }
    _dealWithClick(){
        const { user_name,password,employmentDate,sex,position,nick_name,phone,age}=this.state;
         if(!user_name||!password||!employmentDate||!sex||!position||!age||!phone||!nick_name){
            alert("当前数据不能为空");
            return ;
         }

         let urlSearchParams = new URLSearchParams();
          urlSearchParams.append('user_name',user_name)
          urlSearchParams.append('password',md5(password+S_KEY))
          urlSearchParams.append('employmentDate',employmentDate)
          urlSearchParams.append('sex',sex)
          urlSearchParams.append('position',position)
          urlSearchParams.append('phone',phone)
          urlSearchParams.append('age',age)
          urlSearchParams.append('nick_name',nick_name)
         addDocentData(urlSearchParams)
         .then(res=>{
             console.log(res);
             if(res.status_code==200){
                 alert('添加数据成功')
                 this.props.history.push("/docent/list")
             }
         })
         .catch(err=>{
             console.error(err)
         })
    }
}


export default DocentAdd;