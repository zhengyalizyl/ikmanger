import React, { Component } from 'react'

export default class LKDialog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dialogContent,dialogCancleBtn,dialogConfirmBtn}=this.props;
        return (
            <React.Fragment>
            {this.props.dialogContent&&
            <div className="maskLayout" style={{zIndex:99}}>
                <div className="maskTips">
                    <div className="maskTitle">
                        提示
            </div>
                    <div className="maskContent">
                        {dialogContent}
            </div>
                    <div className="maskBtn">
                        <button
                            className="maskBtn-first"
                            onClick={this.props._dealConfirm}
                        >
                            {dialogConfirmBtn}
                        </button>
                        <button
                         className="maskBtn-two"
                         onClick={this.props._dealCancle}
                         >
                             {dialogCancleBtn}
                         </button>
                    </div>
                </div>


            </div>
            }
            </React.Fragment>
        )
    }
}
