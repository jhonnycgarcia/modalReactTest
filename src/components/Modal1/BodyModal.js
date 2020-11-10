import React from "react";
import BodyModalDefault from "./BodyModalDefault";

class BodyModal extends React.Component {

    /**
     * When finished work on body modal
     * @param {Object} data 
     */
    finishedBodyModal(data){
        this.props.onEnd(data);
    }

    render() {
        return (
            <div className="container">
                <BodyModalDefault onFinished={this.finishedBodyModal.bind(this)}/>
            </div>
        );
    }
}

export default BodyModal;