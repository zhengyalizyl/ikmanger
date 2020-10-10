import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryDataDataAction } from "./../../Store/actionCreator";
class CourseCateory extends Component {
    render() {
        const { categoryData } = this.props;
        console.log(categoryData)

        return (
            <div className="container-fluid">
                <div className="body course-category">
                    <ol className="breadcrumb">
                        <li><Link to="/course/cateory" >课程管理</Link></li>
                        <li className="active">课程分类</li>
                    </ol>
                    <div className="page-title">
                        <Link to="/course/cateory_add" className="btn btn-danger btn-sm pull-right">添加分类</Link>
                    </div>
                    <div className="panel panel-default">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="18%">分类名称</th>
                                    <th>课程数量</th>
                                    <th>是否显示</th>
                                    <th>排序</th>
                                    <th width="10%">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryData.map((category, index) => {
                                    return (
                                        <React.Fragment>
                                            <tr className="active" key={index}>
                                                <td className="text-left">{category.main_title}</td>
                                                <td>{category.main_total_count}</td>
                                                <td >{category.main_is_show == 1 ? "是" : "否"}</td>
                                                <td>{category.main_sort}</td>
                                                <td>
                                                    <Link
                                                        to={
                                                            {
                                                                pathname: "/course/cateory_edit",
                                                                state: { category }
                                                            }
                                                        }

                                                        className="btn btn-info btn-xs"
                                                    >编辑</Link>
                                                </td>
                                            </tr>
                                            {
                                                category.sub_course.map((sub, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="text-left">&nbsp;&nbsp;├ {sub.sub_title}</td>
                                                            <td>{sub.sub_total_count}</td>
                                                            <td>{sub.sub_is_show == 1 ? "是" : "否"}</td>
                                                            <td>{sub.sub_sort}</td>
                                                            <td>
                                                                <Link
                                                                    to={
                                                                        {
                                                                            pathname: "/course/cateory_edit",
                                                                            state: { sub ,main_title:category.main_title,_id:category._id}
                                                                        }
                                                                    }
                                                                    className="btn btn-info btn-xs"
                                                                >编辑</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>


                                    )
                                })
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.reqCategoryData();
    }
}
const mapStateToProps = (state) => {
    return {
        categoryData: state.categoryData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reqCategoryData() {
            const action = getCategoryDataDataAction();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseCateory);
