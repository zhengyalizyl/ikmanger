import React, { Component } from 'react'

export default class DocentEdit extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="body teacher">
                <ol className="breadcrumb">
                    <li><a href="javascript:;">用户管理</a></li>
                    <li className="active">用户添加</li>
                </ol>
                <div className="teacher-add">
                    <form action="" className="form-horizontal col-md-offset-2">
                        <div className="form-group">
                            <label for="" className="col-md-3 control-label">姓名</label>
                            <div className="col-md-4">
                                <input type="text" className="form-control input-sm" placeholder="用户名称"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="" className="col-md-3 control-label">密码</label>
                            <div className="col-md-4">
                                <input type="password" className="form-control input-sm"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="" className="col-md-3 control-label">入职时间</label>
                            <div className="col-md-4">
                                <input type="text" className="form-control input-sm"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="" className="col-md-3 control-label">类型</label>
                            <div className="col-md-2">
                                <select name="" className="form-control input-sm">
                                    <option value="">讲师</option>
                                    <option value="">管理员</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="" className="col-md-3 control-label">性别</label>
                            <div className="col-md-4">
                                <label className="radio-inline">
                                    <input type="radio" checked/> 男
                                </label>
                                <label className="radio-inline">
                                    <input type="radio"/> 女
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <a href="sowing_list.html" className="btn btn-danger btn-sm pull-right"> 添 加 </a>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
