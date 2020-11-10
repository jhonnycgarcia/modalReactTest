import React from "react";

class ModalButtons extends React.Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-success mx-2" disabled={this.props.btnDisable}>Next</button>
                <button type="button" className="btn btn-danger mx-2" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default ModalButtons;