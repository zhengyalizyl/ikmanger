import React, { Component } from 'react'
import echarts from "echarts";
import { connect } from "react-redux";
import { getHomeDataAction } from "./../../Store/actionCreator";

class LKEChartsOne extends Component {
    render() {
        return (
            <div id="main1" style={{ height: '400px' }}>

            </div>
        )
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //        this.props.order_counter
        console.log(nextProps.order_counter)
        let order_counter = nextProps.order_counter;
        if(order_counter!=undefined){
            let left_data=Object.keys(order_counter);
            let total_data=[];
            let total_data_value=[];
            for(let i=0;i<left_data.length;i++){
                    total_data.push(left_data[i])
                    total_data_value.push(order_counter[left_data[i]]);
            }
            let main1 = echarts.init(document.getElementById('main1'));
            let option = {
                title: {
                    text: '订单统计'
                },
                tooltip: {},
                legend: {
                    data: ['购买数量']
                },
                xAxis: {
                    data: total_data
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: total_data_value
                }]
            };
            main1.setOption(option);
    
        }
    }
    componentDidMount() {
        //仅运行一次

        // let main1 = echarts.init(document.getElementById('main1'));
        // let option = {
        //     title: {
        //         text: '订单统计'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data: ['购买数量']
        //     },
        //     xAxis: {
        //         data: ["Web全栈", "JavaEE", "Python", "React实战", "Vue实战", "Node实战"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [45, 10, 26, 29, 23, 33]
        //     }]
        // };
        // main1.setOption(option);


    }
}


const mapStateToProps = (state) => {
    return {
        order_counter: state.homeData.order_counter
    }
}



export default connect(mapStateToProps, null)(LKEChartsOne);

