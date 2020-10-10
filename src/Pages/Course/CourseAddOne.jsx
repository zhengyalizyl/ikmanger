import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import course from "./../../Common/uploads/course.jpg";

 class CourseAddOne extends Component {

    constructor(props){
        super(props);
        const addCourseData=this.props.addCourseData;
        this.state={
            course_title:addCourseData.course_title||"",
            course_sub_title:addCourseData.course_sub_title||"",
            course_serialize_status:addCourseData.course_serialize_status||"",
            course_teacher:addCourseData.course_teacher||"",
            main_category:addCourseData.main_category||"",
            sub_category:addCourseData.sub_category||"",
            course_intro:addCourseData.course_intro||"",
            course_tag:addCourseData.course_tag||"",
             //二级分类(默认是第一个)  
            sub_course:this.props.categoryData[0].sub_course 
        }
    }

    render() {
        const {course_title,
            course_sub_title,
            course_teacher,
            course_serialize_status,
            main_category,
            sub_category,
            course_intro,
            course_tag,
            sub_course
        }=this.state;
        const { categoryData } = this.props;
        return (
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
                            <dt>{course_title}</dt>
                            <dd>讲师：{course_teacher?"郑亚丽":course_teacher}老师</dd>
                            <dd>课时：168</dd>
                        </dl>
                    </div>
                    <ul className="forwards list-unstyled">
                        <li>
                            <Link to="/course/add_one" className="active">
                            <b>1</b>
                            基本信息
                            </Link>
                        </li>
                        <li>
                            <Link to="/course/add_two">
                            <b>2</b>
                            课程图片
                            </Link>
                        </li>
                        <li>
                            <Link to="/course/add_three">
                            <b>3</b>
                            课时管理
                            </Link>
                        </li>
                    </ul>
                    <div className="content">
                        <div className="title">
                            <h5>课程信息</h5>
                        </div>
                        <div action="" className="basic form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">标题</label>
                                <div className="col-md-8">
                                    <input 
                                    type="text"
                                     className="form-control input-sm" 
                                     value={course_title}
                                     placeholder="课程的主标题"
                                     onChange={(e)=>this._dealInputVal(e,"course_title")}
                                     />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">副标题</label>
                                <div className="col-md-8">
                                    <input 
                                    type="text"
                                     className="form-control input-sm" 
                                     placeholder="课程的副标题"
                                     value={course_sub_title}
                                     onChange={(e)=>this._dealInputVal(e,"course_sub_title")}
                                     />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">讲师</label>
                                <div className="col-md-8">
                                    <select 
                                    name="" 
                                    className="form-control input-sm"
                                    value={course_teacher}
                                    onChange={(e)=>this._dealInputVal(e,"course_teacher")}
                                    >
                                        <option value="0">叶建华</option>
                                        <option value="1">高新强</option>
                                        <option value="2">王顺子</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">连载状态</label>
                                <div className="col-md-8">
                                    <select 
                                    name="" 
                                    className="form-control input-sm"
                                    value={course_serialize_status}
                                    onChange={(e)=>this._dealInputVal(e,"course_serialize_status")}
                                    >
                                        <option value="0">非连载课程</option>
                                        <option value="1">更新中</option>
                                        <option value="2">已完结</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">分类</label>
                                <div className="col-md-8">
                                    <select 
                                    name="" 
                                    className="form-control input-sm"
                                    value={main_category}
                                    onChange={(e)=>this._dealInputVal(e,"main_category")}
                                    >
                                        {categoryData.map((category,index)=>{
                                            return(
                                                <option key={index} value={category.main_title}>{category.main_title}</option>
                                            )
                                        })}
                                      
                                    </select>
                                    <select 
                                    name="" 
                                    className="form-control input-sm"
                                    value={sub_category}
                                    onChange={(e)=>this._dealInputVal(e,"sub_category")}
                                    >
                                         { sub_course.map((course,index)=>{
                                            return(
                                                <option key={index} value={course.sub_title}>{course.sub_title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">课程简介</label>
                                <div className="col-md-8 ckeditor">
                                    <textarea 
                                    name="" 
                                    rows="15" 
                                    className="form-control input-sm"
                                    value={course_intro}
                                    onChange={(e)=>this._dealInputVal(e,"course_intro")}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">标签</label>
                                <div className="col-md-8">
                                    <input 
                                    type="text" 
                                    className="form-control input-sm" 
                                    value={course_tag}
                                    onChange={(e)=>this._dealInputVal(e,"course_tag")}
                                    />
                                    <p className="help-block">标签将有利于您的课程被学生检索到</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-10">
                                    <button 
                                   
                                    className="btn btn-danger btn-sm pull-right"
                                    onClick={()=>this._dealClick()}
                                    >下一步</button>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    _dealInputVal(e,type){

        if(type=="main_category"){
            this.props.categoryData.map((category,index)=>{
                if(e.target.value==category.main_title){
                this.setState({
                        sub_course:category.sub_course
                })
            }
            })
        }else{
            this.setState({
                [type]:e.target.value
            })
        }

    }

    _dealClick(){
        //转换数据
        const {course_title,
            course_sub_title,
            course_teacher,
            course_serialize_status,
            main_category,
            sub_category,
            course_intro,
            course_tag
        }=this.state;
            //空验证
            if(!course_title||!course_sub_title||!course_intro||!course_tag){
                alert("输入的内容不能为空");
                return;
            }
            //赋值
            this.props.addCourseData.course_sub_title=course_sub_title;
            this.props.addCourseData.course_title=course_title;
            this.props.addCourseData.course_teacher=course_teacher==""?'郑亚丽':course_teacher;
            this.props.addCourseData.course_serialize_status=course_serialize_status==""?"非连载状态":course_serialize_status;
            this.props.addCourseData.main_category=main_category==""?this.props.categoryData[0].main_title:main_category;
            this.props.addCourseData.sub_category=sub_category==""?this.props.categoryData[0].sub_course[0].sub_title:sub_category;
            this.props.addCourseData.course_intro=course_intro;
            this.props.addCourseData.course_tag=course_tag;
        this.props.history.push( "/course/add_two" )
    }
}

const mapStateToProps=(state)=>{
    return {
        categoryData:state.categoryData,
        addCourseData:state.addCourseData 
    }
}

export default connect(mapStateToProps,null)(CourseAddOne);