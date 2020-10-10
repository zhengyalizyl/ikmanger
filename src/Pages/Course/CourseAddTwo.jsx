import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LKTool from "./../../Components/LKTool/LKTool";
import course from "./../../Common/uploads/course.jpg"
const _lktool=new LKTool();
class CourseAddTwo extends Component {
    constructor(props){
        super(props);
        const course_page=this.props.addCourseData.course_page||"";
        this.state={
            course_page:course_page
        }
    }
    render() {
        const { addCourseData } = this.props;
        const {course_page}=this.state
        return (
            <div className="container-fluid">
                <div className="body course-add teacher-profile">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程添加</li>
                    </ol>
                    <div className="steps">
                        <div className="brief">
                            <div className="thumb">
                                <img src={course_page?course_page:course} alt="" />
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
                                <Link to="/course/add_two" className="active">
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
                        <div className="content settings">
                            <div className="title">
                                <h5>课程封面</h5>
                            </div>
                            <div className="picture col-md-offset-2">
                                <div className="preview col-md-2 " style={{height:225}}>
                                <img src={course_page?course_page:course} alt="" />
                                    <input
                                        type="file"
                                        ref="course_page"
                                        id="upfile"
                                        className="form-control input-sm"
                                        onChange={(e) => { this._onInputChange(e, "course_page") }}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                                <p className="tips">
                                    可上传jpg, gif, png格式文件, 图片建议尺寸大于400x225，文件大小不能超过2M。
                            </p>
                                <div className="col-md-2">
                                    <button 
                                    
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>this._dealWithClick()}
                                    >
                                        下一步</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    _dealWithClick(){
        if(!this.state.course_page){
            alert("请上传封面图片");
            return; 
        }
        this.props.addCourseData.course_page_url=this.refs.course_page.files[0];
        this.props.addCourseData.course_page=this.state.course_page;
        this.props.history.push("/course/add_three" )
    }
    _onInputChange(e,type) { 

         //1.根据type获取用户上传的图片
         let file=this.refs[type].files[0];

         _lktool.fileToBase64Url(e.target.files[0],(src)=>{
             this.setState({
                 [type]:src
             })
 
             console.log(this.state[type])
         })
    }
}

const mapStateToProps = (state) => {
    return {
        addCourseData: state.addCourseData
    }
}
export default connect(mapStateToProps, null)(CourseAddTwo);