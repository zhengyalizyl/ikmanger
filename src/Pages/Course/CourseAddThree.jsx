import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import course from "./../../Common/uploads/course.jpg";
import { addSourseData } from "./../../Api/index";
class CourseAddThree extends Component {
    render() {
        const {addCourseData}=this.props;
        return (
            <div>
            <div className="container-fluid">
                <div className="body course-add">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程添加</li>
                    </ol>
                    <div className="steps">
                        <div className="brief">
                            <div className="thumb">
                                <img src={course} alt="" />
                            </div>
                            <dl className="info">
                                <dt>{addCourseData.course_title}</dt>
                                <dd>讲师：{addCourseData.course_teacher}老师</dd>
                                <dd>课时：168</dd>
                            </dl>
                        </div>
                        <ul className="forwards list-unstyled">
                            <li>
                                <Link to="/course/add_one" className="done">
                                    <b className="fa fa-check"></b>
                                    基本信息
                            </Link>
                            </li>
                            <li>
                                <Link to="/course/add_two" className="done">
                                    <b className="fa fa-check"></b>
                                    课程图片
                            </Link>
                            </li>
                            <li>
                                <Link to="/course/add_three" className="active">
                                    <b>3</b>
                                    课时管理
                            </Link>
                            </li>
                        </ul>
                        <div className="content">
                            <div className="title">
                                <h5>课时管理</h5>
                                <a href="javascript:;" data-toggle="modal" data-target="#lesson" className="btn btn-danger btn-sm pull-right">
                                    <i className="fa fa-plus"></i>
                                    课时
                            </a>
                            </div>
                            <div className="lessons">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <span className="order">任务1</span>
                                        <span className="name">H5+C3基础-常用标签</span>
                                        <span className="duration">12:06</span>
                                        <div className="action pull-right">
                                            <a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                                            {/* <a href="javascript:;" className="btn btn-primary btn-xs">预览</a> */}
                                            <a href="javascript:;" className="btn btn-danger btn-xs">删除</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <span className="order">任务1</span>
                                        <span className="name">H5+C3基础-常用标签</span>
                                        <span className="duration">12:06</span>
                                        <div className="action pull-right">
                                            <a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                                            <a href="javascript:;" className="btn btn-primary btn-xs">预览</a>
                                            <a href="javascript:;" className="btn btn-danger btn-xs">删除</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <span className="order">任务1</span>
                                        <span className="name">H5+C3基础-常用标签</span>
                                        <span className="duration">12:06</span>
                                        <div className="action pull-right">
                                            <a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                                            <a href="javascript:;" className="btn btn-primary btn-xs">预览</a>
                                            <a href="javascript:;" className="btn btn-danger btn-xs">删除</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <span className="order">任务1</span>
                                        <span className="name">H5+C3基础-常用标签</span>
                                        <span className="duration">12:06</span>
                                        <div className="action pull-right">
                                            <a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                                            <a href="javascript:;" className="btn btn-primary btn-xs">预览</a>
                                            <a href="javascript:;" className="btn btn-danger btn-xs">删除</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <span className="order">任务1</span>
                                        <span className="name">H5+C3基础-常用标签</span>
                                        <span className="duration">12:06</span>
                                        <div className="action pull-right">
                                            <a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                                            <a href="javascript:;" className="btn btn-primary btn-xs">预览</a>
                                            <a href="javascript:;" className="btn btn-danger btn-xs">删除</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                    <button 
                                    
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>this._dealWithClick()}
                                    >
                                        提交课程</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="lesson">
                <div className="modal-dialog" style={{width: "800px"}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">添加任务</h4>
                        </div>
                        <div className="modal-body">
                            <form action="" className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">*标题</label>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control input-sm" />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> 免费试学
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">*视频</label>
                                    <div className="col-md-8">
                                        <div className="input-group">
                                            {/* <input type="text" className="form-control input-sm" placeholder="支持腾讯、爱奇艺、网易的视频页面地址导入" /> */}
                                            <input type="file" />
                                            {/* <span className="input-group-btn">
                                                <button className="btn btn-danger btn-sm">获取</button>
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">*课程介绍</label>
                                    <div className="col-md-8">
                                        <textarea name="" rows="5" className="form-control input-sm"></textarea>
                                    </div>
                                </div>
                                <div className="form-group form-inline">
                                    <label htmlFor="" className="col-md-2 control-label">*时长</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control input-sm small" />
                                        分
                                <input type="text" className="form-control input-sm small" />
                                        秒
                                 <p className="help-block">时长必须为整数。</p>
                                    </div>
                                </div>
                                <div className="form-group form-inline">
                                    <label htmlFor="" className="col-md-2 control-label">建议学习时长</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control input-sm small" />
                                        小时
                                 <p className="help-block">（如未设置，则默认学习时长为视频时长2倍取整。）</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link btn-sm" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-danger btn-sm"> 添 加 </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    _dealWithClick(){
        //带有文件的，都得需要formData传递
        const {addCourseData}=this.props;
        let formData=new FormData();
        formData.append("course_name",addCourseData.course_name);
        formData.append("course_title",addCourseData.course_title);
        formData.append("course_sub_title",addCourseData.course_sub_title);
        formData.append("course_serialize_status",addCourseData.course_serialize_status);
        formData.append("course_teacher",addCourseData.course_teacher)
        formData.append("main_category",addCourseData.main_category)
        formData.append("sub_category",addCourseData.sub_category)
        formData.append("course_intro",addCourseData.course_intro)
        formData.append("course_tag",addCourseData.course_tag)
        formData.append("course_page",addCourseData.course_page_url)
        // console.log(formData.get)
        addSourseData(formData)
        .then(res=>{
            if(res.status_code==200){
                //清空所有数据
            //addCourseData为第一层级不能清理,会报错，但可以清理第二层级
            this.props.addCourseData.course_name="";
            this.props.addCourseData.course_title="";
            this.props.addCourseData.course_sub_title="";
            this.props.addCourseData.course_serialize_status="";
            this.props.addCourseData.course_teacher="";
            this.props.addCourseData.main_category="";
            this.props.addCourseData.sub_category="";
            this.props.addCourseData.course_intro="";
            this.props.addCourseData.course_tag="";
            this.props.addCourseData.course_page_url="";
                this.props.history.push("/")
            }
                console.log(res)
        })
        .catch(
            error=>{
                console.error(error)
            }
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addCourseData: state.addCourseData
    }
}
export default connect(mapStateToProps,null)(CourseAddThree);