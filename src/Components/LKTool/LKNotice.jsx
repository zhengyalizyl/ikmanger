import React, { Component } from 'react'

export default class LKNotice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {tipsContent}=this.props;
        return (
            <React.Fragment>
            { tipsContent && <div className="maskLayout">
            <div className="maskTips">
                <div className="maskTitle">
                    提示
                </div>
                <div className="maskContent">
                   {this.props.tipsContent}
                 </div>

            </div>


        </div>}
        </React.Fragment> 
        )
}

}