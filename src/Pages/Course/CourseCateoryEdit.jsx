import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editCategoryData, getCategoryMainTitlData } from "../../Api/index";
class CourseCateoryEdit extends Component {
    constructor(props) {
        super(props);
        console.log(props, "-----")
        let propsState = props.location.state;
        let category = "";
        let sub = "";
        let main_title = "";
        if (propsState) {
            if (propsState.category) {
                category = props.location.state.category
            } else if (propsState.sub) {
                sub = props.location.state.sub;
                
                main_title = propsState.main_title;
            }
        }
        this.state = {
            main_title: main_title,
            sub_title: sub.sub_title || '',
            main_title_array: [],
            sub_is_show: sub.sub_is_show || '1',
            sub_sort: sub.sub_sort || '1'
        }
        console.log(this.state.main_title)
    }
    componentDidMount() {
        getCategoryMainTitlData()
            .then(res => {
                if (res.status_code == 200) {
                    this.setState(
                        {
                            main_title_array: res.result
                        }
                    )

                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="body course-category">
                    <ol className="breadcrumb">
                        <li><Link to="/course/cateory" >课程管理</Link></li>
                        <li className="active">课程分类</li>
                    </ol>
                    <div className="category-add">
                        <div action="" className="form-horizontal">
                            <div className="form-group">
                                <label for="" className="col-md-4 control-label">名称</label>
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        value={this.state.sub_title}
                                        className="form-control input-sm"
                                        placeholder="填写分类名称"
                                        onChange={(e) => { this._onInputChange(e, "sub_title") }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-4 control-label">级别</label>
                                <div className="col-md-2">
                                    <select
                                    value={this.state.main_title}
                                        // defaultValue={this.state.main_title?this.state.main_title:''}
                                        name=""
                                        className="form-control input-sm"
                                        onChange={(e) => { this._onInputChange(e, "main_title") }}
                                    >
                                        <option value="">顶级分类</option>
                                        {this.state.main_title_array.map((main_title, index) => {
                                            return (
                                                <option
                                                    // selected={main_title == this.state.main_title}
                                                    key={index}
                                                    value={main_title}
                                                >
                                                    {main_title}
                                                </option>
                                            )
                                        })}

                                        {/* <option value="">JavaEE+大数据</option>
                                    <option value="">Python+人工智能</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-4 control-label">排序</label>
                                <div className="col-md-1">
                                    <input
                                        type="text"
                                        className="form-control input-sm"
                                        value={this.state.sub_sort}
                                        onChange={(e) => { this._onInputChange(e, "sub_sort") }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="col-md-4 control-label">是否显示</label>
                                <div className="col-md-3">
                                    <label className="checkbox-inline">
                                        <input

                                            type="radio"
                                            checked={this.state.sub_is_show == 1 ? true : false}
                                            onChange={(e) => { this._onInputChange(e, "是") }}
                                        /> 是
                                </label>
                                    <label className="checkbox-inline">
                                        <input
                                            checked={this.state.sub_is_show == 0 ? true : false}
                                            type="radio"
                                            onChange={(e) => { this._onInputChange(e, "否") }}
                                        /> 否
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button

                                        onClick={() => { this._dealWithClick() }}
                                        className="btn btn-sm btn-danger pull-right"
                                    >保存</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _onInputChange(e, type) {
        console.log(e.target.value, type)

        if (type == "是") {
            this.setState({
                sub_is_show: 1
            })

        } else if (type == "否") {
            this.setState({
                sub_is_show: 0
            })
        } else {
            this.setState({
                [type]: e.target.value
            })
        }

    }
    _dealWithClick() {

        // to="/course/cateory"
        const { sub_is_show, sub_title, sub_sort, main_title } = this.state;
        if (sub_is_show == "" || sub_title == "" || !sub_sort || !main_title) {
            alert("沒有完整填入数据")
            return;
        }
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append("sub_is_show", sub_is_show)
        urlSearchParams.append("sub_title", sub_title)
        urlSearchParams.append("sub_sort", sub_sort)
        urlSearchParams.append("main_title", main_title)
        urlSearchParams.append("sub_total_count", this.props.location.state.sub.sub_total_count)
        urlSearchParams.append("old_main_title",this.props.location.state.main_title)
        urlSearchParams.append("old_sub_title", this.props.location.state.sub.sub_title)
        urlSearchParams.append("_id",this.props.location.state._id);
        editCategoryData(urlSearchParams)
            .then(res => {
                console.log(res)
                if(res.status_code==200){
                    alert("修改课程成功");
                    this.props.history.push("/course/cateory");
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

}
export default CourseCateoryEdit;