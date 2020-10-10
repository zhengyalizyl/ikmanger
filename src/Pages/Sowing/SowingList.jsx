import React, { Component } from 'react';
import { Link } from "react-router-dom";
import icon from "./../../Common/images/default.png";
import { connect } from "react-redux"
import { getSowingDataAction } from "./../../Store/actionCreator";
import { removeSowingData, getSowingCountData } from '../../Api/index';
import LkPagination from "./../../Components/LKTool/LkPagination";
import LKDialog from "./../../Components/LKTool/LKDialog";
import LKNotice from "./../../Components/LKTool/LKNotice";
const IMG_PRE = "http://localhost:1688/uploads/";

class Sowing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 5,
            total: 0,
            dialogContent: '',
            dialogConfirmBtn: '修改',
            dialogCancleBtn: '取消',
            tipsContent: '',
            id:''
        }
    }
    render() {
        const { sowingData } = this.props;
        console.log(1)
        return (
            <div className="container-fluid">
                <div className="body advert">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">轮播图管理</a></li>
                        <li className="active">轮播图列表</li>
                    </ol>
                    <div className="page-title">
                        <Link to="/sowing/add" className="btn btn-danger btn-sm pull-right">添加轮播图</Link>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form action="" className="form-inline">
                                <select name="" className="form-control input-sm">
                                    <option value="">按课程</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按学科</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按热度</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按日期</option>
                                </select>
                                <button className="btn btn-primary btn-sm">排序</button>
                            </form>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>图片名称</th>
                                    <th>大图</th>
                                    <th>小图</th>
                                    <th>跳转链接</th>
                                    <th>上架时间</th>
                                    <th>下架时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sowingData.map((sowing, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>LK00{(this.state.page-1)*this.state.pageSize+index + 1}</td>
                                                <td>{sowing.image_title}</td>
                                                <td>
                                                    <img src={IMG_PRE + sowing.image_url} style={{ width: 50 }} />
                                                </td>
                                                <td>
                                                    <img src={IMG_PRE + sowing.image_small_url} style={{ width: 50 }} />
                                                </td>
                                                <td>{sowing.image_link}</td>
                                                <td>{sowing.s_time.substr(0, 10)}</td>
                                                <td>{sowing.e_time.substr(0, 10)}</td>
                                                <td>
                                                    <Link
                                                        to={{
                                                            pathname: "/sowing/edit",
                                                            state: { sowing }
                                                        }}
                                                        className="btn btn-primary btn-xs">编辑</Link>
                                                    {/* <button onClick={this._removeSowing(sowing._id)} className="btn btn-danger btn-xs">删除</button> */}
                                                    <button onClick={() => this._removeSowing(sowing._id)} className="btn btn-danger btn-xs">删除</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <LkPagination
                        current={this.state.page}
                        total={this.state.total}
                        pageSize={this.state.pageSize}
                        onChange={(page) => { this._onPageNumChange(page) }} />
                </div>
                <LKDialog
                    dialogContent={this.state.dialogContent}
                    dialogConfirmBtn={this.state.dialogConfirmBtn}
                    dialogCancleBtn={this.state.dialogCancleBtn}
                    _dealConfirm={this._dealConfirm}

                    _dealCancle={this._dealCancle} >
                </LKDialog>
                <LKNotice tipsContent={this.state.tipsContent}></LKNotice>
            </div>

        )
    }
    _dealConfirm = () => {

        this.callbackDealClick();
    }
    callbackDealClick(){

        removeSowingData(this.state.id)
            .then(res => {
                if (res.status_code == 200) {
                    this.props.reqSowingData(
                        {
                            page:this.state.page,
                            pageSize:this.state.pageSize
                        }
                    );
                    this.setState({
                        tipsContent:'删除轮播图成功'
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
                    tipsContent:'删除轮播图失败',
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
    _dealCancle = () => {
        this.setState(
            {
                dialogContent: '',
                dialogConfirmBtn: '修改',
                dialogCancleBtn: '取消'
            })
    }
   

    componentWillMount() {
       
        getSowingCountData()
            .then(res => {
                if (res.status_code == 200) {
                    this.setState({
                        total: res.result
                    })
                }
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    componentDidMount() {
        this.props.reqSowingData({
            page:this.state.page,
            pageSize:this.state.pageSize
        });
    }
    _onPageNumChange(page) {
        this.setState({
            page: page
        })
        this.props.reqSowingData({
            page:page,
            pageSize:this.state.pageSize
        });
    }
    _removeSowing(id) {
            this.setState({
                id:id,
                dialogContent: '是否确定删除？',
                dialogConfirmBtn: '删除',
                dialogCancleBtn: '取消'
            })
    }

}

const mapStateToProps = (state) => {
    return {
        sowingData: state.sowingData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reqSowingData(params) {
            const action = getSowingDataAction(params);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sowing);