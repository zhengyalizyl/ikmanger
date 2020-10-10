import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LKPagination from "./../../Components/LKTool/LkPagination";
import { getDocentDataAction } from './../../Store/actionCreator';
import { getDocentCountData,removeDocentData } from './../../Api/index';
import icon from "./../../Common/images/default.png";
import LKDialog from "./../../Components/LKTool/LKDialog";
import LKNotice from "./../../Components/LKTool/LKNotice";
const IMG_PRE = "http://localhost:1688/uploads/";
class DocentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            total: 0,
            pageSize: 2,
            docent: {},
            dialogContent: '',
            dialogConfirmBtn: '修改',
            dialogCancleBtn: '取消',
            tipsContent: '',
            id:''
        }
    }
    componentWillMount() {
        getDocentCountData()
            .then(res => {
                if (res.status_code == 200) {
                    this.setState({
                        total: res.result
                    })
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { docentData } = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <div className="body teacher-list">
                        <ol className="breadcrumb">
                            <li><a href="javascript:;">用户管理</a></li>
                            <li className="active">用户列表</li>
                        </ol>
                        <div className="page-title">
                            <Link to="/docent/add" className="btn btn-danger btn-sm pull-right">添加用户</Link>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form action="" className="form-inline">
                                    <div className="input-group">
                                        <input type="text" className="form-control input-sm" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-danger btn-sm">搜索</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>编号</th>
                                        <th>姓名</th>
                                        <th>昵称</th>
                                        <th>年龄</th>
                                        <th>性别</th>
                                        <th>手机号码</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {docentData.map((docent, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{(this.state.page - 1) * this.state.pageSize + index + 1}</td>
                                                <td>{docent.user_name}</td>
                                                <td>{docent.nick_name}</td>
                                                <td>{docent.age}</td>
                                                <td>{docent.sex}</td>
                                                <td>{docent.phone}</td>
                                                <td>
                                                    <a href="#teacherModal"
                                                        data-toggle="modal"
                                                        className="btn btn-info btn-xs"
                                                        onClick={() => this._lookView(docent)}
                                                    >查 看</a>
                                                    <Link
                                                        to={
                                                            {
                                                                pathname: '/docent/edit',
                                                                state: {
                                                                    docent: docent
                                                                }
                                                            }
                                                        }
                                                        className="btn btn-info btn-xs"
                                                    >编 辑
                                                </Link>
                                                    <button 
                                                     className="btn btn-warning btn-xs"
                                                     onClick={()=>this._removeWithClick(docent._id)}
                                                     >注 销</button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <LKPagination
                        current={this.state.page}
                        total={this.state.total}
                        pageSize={this.state.pageSize}
                        onChange={(page) => this._onChangePageNum(page)}
                    />
                     <LKDialog
                    dialogContent={this.state.dialogContent}
                    dialogConfirmBtn={this.state.dialogConfirmBtn}
                    dialogCancleBtn={this.state.dialogCancleBtn}
                    _dealConfirm={this._dealConfirm}

                    _dealCancle={this._dealCancle} >
                </LKDialog>
                <LKNotice tipsContent={this.state.tipsContent}></LKNotice>
                </div>

                <div className="modal fade" id="teacherModal">
                    <div className="modal-dialog" style={{ width: "750px" }}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="panel-title">讲师信息</h4>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered table-condensed">
                                    <tbody>
                                        <tr>
                                            <th>姓名:</th><td>{this.state.docent.user_name}</td>
                                            <th>职位:</th><td colspan="3">讲师</td>
                                            <td rowspan="4" width="128">
                                                <div className="avatar">
                                                    <img src={icon} alt="" style={{ width: 128 }} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>别名:</th><td>{this.state.docent.nick_name}</td>
                                        </tr>
                                        <tr>
                                            <th>性别:</th><td>{this.state.docent.sex}</td>
                                            <th>出生日期:</th><td colspan="3">{this.state.docent.birthday}</td>
                                        </tr>
                                        <tr>
                                            <th>手机号码:</th><td colspan="2">{this.state.docent.phone}</td>
                                            <th>邮箱:</th><td colspan="2">{this.state.docent.email}</td>
                                        </tr>
                                        <tr>
                                            <th>住址:</th><td colspan="6">{this.state.docent.address}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="7">
                                                <div className="introduce">
                                                    <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
                                                    <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
                                                    <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _dealConfirm = () => {

        this.callbackDealClick();
    }
    callbackDealClick(){
        removeDocentData(this.state.id)
        .then(res => {
            if (res.status_code == 200) {
                this.props.reqDocentData(
                    {
                        page:this.state.page,
                        pageSize:this.state.pageSize
                    }
                );
                this.setState({
                    tipsContent:'删除数据成功'
                },()=>{
                    setTimeout(()=>{
                        this.setState({
                            tipsContent:'',
                            dialogContent: '',
                        })
                    },3000)
                })
            }
        })
        .catch(error => {
            this.setState({
                tipsContent:'删除数据失败',
                id:''
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        tipsContent:'',
                        dialogContent: '',
                    })
                },3000)
            })
        })
    }
    _removeWithClick(id){
        this.setState({
            id:id,
            dialogContent: '是否确定注销？',
            dialogConfirmBtn: '注销',
            dialogCancleBtn: '取消'
        })
    }
    _dealCancle = () => {
        this.setState(
            {
                dialogContent: '',
                dialogConfirmBtn: '注销',
                dialogCancleBtn: '取消'
            })
    }
   
    componentDidMount() {
        this.props.reqDocentData({
            page: this.state.page,
            pageSize: this.state.pageSize
        })
    }

    _lookView(docent) {
        console.log(docent)
        this.setState({
            docent,
        })
    }
    _onChangePageNum(page) {
        this.setState({
            page: page,
            pageSize: this.state.pageSize
        })
        this.props.reqDocentData({
            page: page,
            pageSize: this.state.pageSize
        })
    }
}

const mapStateToProps = (state) => {
    return {
        docentData: state.docentData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reqDocentData(params) {
            const action = getDocentDataAction(params);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocentList);

