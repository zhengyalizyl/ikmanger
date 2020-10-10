import React, { Component } from 'react';
import { Link } from "react-router-dom";
import icon from "./../../Common/images/default.png";
import { editSowingData } from '../../Api/index';
import LKTool from "./../../Components/LKTool/LKTool";
import LKDialog from "./../../Components/LKTool/LKDialog";
import LKNotice from "./../../Components/LKTool/LKNotice";
const IMG_PRE = "http://localhost:1688/uploads/";


const _lktool = new LKTool();
class SowingEdit extends Component {
    constructor(props) {
        super(props);
        //  this.props.state.
        console.log(this.props)
        const sowing = this.props.location.state.sowing
        this.state = {
            sowing: {
                ...sowing,
                image_url: IMG_PRE + sowing.image_url,
                image_small_url: IMG_PRE + sowing.image_small_url
            },
            dialogContent: '',
            dialogConfirmBtn: '修改',
            dialogCancleBtn: '取消',
            tipsContent: ''
        }
    }
    render() {
        const sowing = this.state.sowing;
        console.log(sowing)
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <ol className="breadcrumb">
                        <li><Link to="/sowing">轮播图管理</Link></li>
                        <li className="active">编辑轮播图</li>
                    </ol>
                    <div className="settings">
                        <div action="" className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">轮播图名称</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_title"
                                        value={sowing.image_title}
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写轮播图名称"
                                        onChange={(e) => this._dealInputValue(e, "image_title")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">大图片</label>
                                <div className="col-md-2 preview">
                                    <img src={sowing.image_url} style={{ border: `1px solid #e0e0e0;` }} />
                                    <input
                                        type="file"
                                        ref="image_url"
                                        onChange={(e) => this._previewImg(e, "image_url")}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">小图片</label>
                                <div className="col-md-2 preview">
                                    <img src={sowing.image_small_url} style={{ border: `1px solid #e0e0e0;` }} />
                                    <input
                                        type="file"
                                        ref="image_small_url"
                                        onChange={(e) => this._previewImg(e, "image_small_url")}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">跳转页面链接</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_link"
                                        value={sowing.image_link}
                                        type="text" className="form-control input-sm"
                                        placeholder="填写跳转链接"
                                        onChange={(e) => this._dealInputValue(e, "image_link")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="s_time"
                                        value={sowing.s_time.substr(0, 10)}
                                        type="text" className="form-control input-sm"
                                        placeholder="填写上架时间"
                                        onChange={(e) => this._dealInputValue(e, "s_time")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="e_time"
                                        value={sowing.e_time.substr(0, 10)}
                                        type="text" className="form-control input-sm"
                                        placeholder="填写下架时间"
                                        onChange={(e) => this._dealInputValue(e, "e_time")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button onClick={this._dealWithClick} className="btn btn-danger btn-sm pull-right">确认修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LKDialog
                    dialogContent={this.state.dialogContent}
                    dialogConfirmBtn={this.state.dialogConfirmBtn}
                    dialogCancleBtn={this.state.dialogCancleBtn}
                    _dealConfirm={this._dealConfirm}

                    _dealCancle={this._dealCancle} >
                </LKDialog>
                <LKNotice tipsContent={this.state.tipsContent}>
                </LKNotice>
            </div>
        )
    }

    //处理文本内容
    _dealInputValue(e, type) {
        this.setState({
            sowing: { ...this.state.sowing, [type]: e.target.value }
        })
        // if(type=="image_title"){
        //     this.setState({
        //         sowing:{...this.state.sowing,image_title:e.target.value}
        //     })
        // }else if(type=="image_link"){
        //     this.setState({
        //         sowing:{...this.state.sowing,image_link:e.target.value}
        //     })
        // }else if(type=="s_time"){
        //     this.setState({
        //         sowing:{...this.state.sowing,s_time:e.target.value}
        //     })
        // }else if(type=="e_time"){
        //     this.setState({
        //         sowing:{...this.state.sowing,e_time:e.target.value}
        //     })
        // }
        console.log(this.state.sowing)
    }
    //处理图片内容的展示
    _previewImg(e, type) {
        console.log(e, type);
        //1.根据type获取用户上传的图片
        let file = this.refs[type].files[0];

        _lktool.fileToBase64Url(e.target.files[0], (src) => {
            this.setState({
                sowing: { ...this.state.sowing, [type]: src }
            })

            console.log(this.state.sowing)
        })
        // //2.修改图片信息
        // const  reader=new FileReader();
        // let src="";
        // if(file){
        //     reader.readAsDataURL(file);
        // }else{
        //     src=""
        // }
        // //阅读器已经解析完毕
        // reader.onloadend=()=>{
        //     src=reader.result;
        //     console.log(src)

        // this.setState({
        //             sowing:{...this.state.sowing,[type]:src}
        //         })
        // if(type=="image_url"){
        //     this.setState({
        //         sowing:{...this.state.sowing,image_url:src}
        //     })
        // }else if(type =="image_small_url"){
        //     this.setState({
        //         sowing:{...this.state.sowing,image_small_url:src}
        //     })
        // }

        // }

    }
    _dealConfirm = () => {

        this.callbackDealClick();
    }
    _dealCancle = () => {
        const sowing = this.props.location.state.sowing
        this.setState(
            {
                sowing: {
                    ...sowing,
                    image_url: IMG_PRE + sowing.image_url,
                    image_small_url: IMG_PRE + sowing.image_small_url
                },
                dialogContent: '',
                dialogConfirmBtn: '修改',
                dialogCancleBtn: '取消'
            })
    }
    callbackDealClick() {
        //1.处理请求数据
        const { _id, image_link, image_title, s_time, e_time } = this.state.sowing;
        //2.取出图片的原始名称
        const { image_url, image_small_url } = this.props.location.state.sowing;
        //3.创建formData
        let formData = new FormData();
        formData.append("image_link", image_link)
        formData.append("id", _id)
        formData.append("image_small_url", this.refs.image_small_url.files[0] || image_small_url)
        formData.append("image_title", image_title)
        formData.append("image_url", this.refs.image_url.files[0] || image_url)
        formData.append("e_time", e_time)
        formData.append("s_time", s_time)

        console.log(formData.get("image_title"), _id, this.state.sowing)
        //2.发送请求
        editSowingData(formData)
            .then(res => {
                if (res.status_code == 200) {
                    this.setState({
                        tipsContent: '修改数据成功'
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                tipsContent: ''
                            })
                            this.props.history.push("/sowing/list")
                        }, 3000)
                    })

                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    //点击修改按钮
    _dealWithClick = () => {
        this.setState({
            dialogContent: '是否确定修改？',
            dialogConfirmBtn: '修改',
            dialogCancleBtn: '取消'
        })
    }
}
export default SowingEdit;