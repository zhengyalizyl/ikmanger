import React, { Component } from 'react'
import {connect} from "react-redux";
import { getCourseDataAction } from "./../../Store/actionCreator";
import { getCourseCountData } from "./../../Api/index";
import LKPagination from "./../../Components/LKTool/LkPagination";
import  course_1 from "./../../Common/uploads/course_1.png"
import  course_2 from "./../../Common/uploads/course_2.png"
import  course_3 from "./../../Common/uploads/course_3.png"
import  course_4 from "./../../Common/uploads/course_4.png"
const  IMG_PRE="http://localhost:1688/uploads/";
 class CourseList extends Component {
     constructor(props){
         super(props);
         this.state={
             page:1,
             pageSize:5,
             total:0
         }
     }
     componentWillMount(){
         getCourseCountData()
         .then(res=>{
             if(res.status_code==200){
                 this.setState({
                     total:res.result
                 })
             }
         })
         .catch(error=>{
             console.error(error)
         })
     }
    render() {
        const {courseData}=this.props;
        return (
            <div className="container-fluid">
            <div className="body course-list">
                <ol className="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li className="active">课程列表</li>
                </ol>
                <div className="courses">
                    <div className="search">
                        <div action="" className="form-inline">
                            <select name="" className="form-control input-sm">
                                <option value="">按学科</option>
                            </select>
                            <select name="" className="form-control input-sm">
                                <option value="">按类型</option>
                            </select>
                            <select name="" className="form-control input-sm">
                                <option value="">按价格</option>
                            </select>
                            <select name="" className="form-control input-sm">
                                <option value="">按热度</option>
                            </select>
                            <button className="btn btn-danger btn-sm">过滤</button>
                            <div className="input-group pull-right">
                                <input type="text" className="form-control input-sm" />
                                <span className="input-group-btn">
                                    <button className="btn btn-danger btn-sm">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {courseData.map((course,index)=>{
                        return(
                            <div className="course" key={index}>
                            <div className="pic">
                                <img src={course.course_page.includes("undefined")?course_1:IMG_PRE+course.course_page} alt="" />
                            </div>
                            <div className="info">
                                <a href="javascript:;">{course.course_name}</a>
                                <ul className="list-unstyled">
                                    <li>
                                        <span>讲师：{course.course_teacher}</span>
                                        <span>类别：{course.main_category}</span>
                                    </li>
                                    <li>
                                        <span>课时：123</span>
                                        <span>学员：111111</span>
                                    </li>
                                    <li>
                                        <span>浏览：123333</span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                 
                        )
                    })}
                   
                </div>
                <LKPagination
                current={this.state.page}
                total={this.state.total}
                pageSize={this.state.pageSize}
                onChange={(page)=>this._onChangePageNum(page)}
                />
                {/* <ul className="pagination pull-right">
                    <li><a href="#">上一页</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">下一页</a></li>
                </ul> */}
            </div>
        </div>
        )
    }
    _onChangePageNum(page){
        this.setState({
            page:page
        })
        this.props.reqCourseData({
            page:page,
            pageSize:this.state.pageSize
        })
    }
    componentDidMount(){
        this.props.reqCourseData({
            page:this.state.page,
            pageSize:this.state.pageSize
        });
    }
}

const  mapStateToProps=(state)=>{
    return {
        courseData:state.courseData
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        reqCourseData(params){
            const action=getCourseDataAction(params);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseList);
