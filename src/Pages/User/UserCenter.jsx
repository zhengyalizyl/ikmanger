import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class UserCenter extends Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="body user-profile">
                <ol class="breadcrumb">
                    <li><a href="javascript:;">用户管理</a></li>
                    <li class="active">用户信息</li>
                </ol>
                <div class="profile">
                    <div class="pull-left">
                        <img src="./uploads/avatar.png" class="img-circle pull-left" alt="" />
                        <span class="name">撩课学院</span>
                        <span>喜欢IT, 就上撩课！</span>
                    </div>
                    <ul class="pull-right list-inline">
                        <li>
                            <span>积分</span>
                            <a href="javascript:;">120</a>
                        </li>
                        <li>
                            <span>等级</span>
                            <a href="javascript:;">10</a>
                        </li>
                        <li>
                            <span>金币</span>
                            <a href="javascript:;">10000</a>
                        </li>
                    </ul>                   
                </div>
                <div class="courses">
                    <ul class="navs list-unstyled">
                        <li>
                            <a href="javascript:;" class="active">全部</a>
                        </li>
                        <li>
                            <a href="javascript:;">在学</a>
                        </li>
                        <li>
                            <a href="javascript:;">完成</a>
                        </li>
                    </ul>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_1.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_2.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_3.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_4.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_1.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_2.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_3.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_4.png" alt=""/>
                            <span class="percent">100%</span>
                        </div>
                        <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <p>2019-10-26学习至 <span>L1 第一章 学前准备</span></p>
                        </div>
                    </div>
                </div>
                <ul class="pagination pull-right">
                    <li><a href="#">上一页</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">下一页</a></li>
                </ul>
            </div>
        </div>
        )
    }
}
