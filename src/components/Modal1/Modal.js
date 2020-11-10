import React from "react";

import ModalSteps from './ModalSteps';
import ModalButtons from './ModalButtons';
import BodyModal from "./BodyModal";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        const dStep = {status:false};

        this.state = {
            title: "Choose Type Operation",
            steps: Array(5).fill(dStep),
            btnState: true,
            modalData: {}
        };

        this.changeBtnStatus = this.changeBtnStatus.bind(this);
        this.restartSteps = this.restartSteps.bind(this);
        this.restartBtnStatus = this.restartBtnStatus.bind(this);
        this.handlerModalResult = this.handlerModalResult.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    // Restart Steps
    restartSteps(){
        this.setState({
            steps: Array(5).fill(this.dStep)
        });
    }

    // Restart Modal Buttons
    restartBtnStatus(){
        this.setState({
            btnState: true
        });
    }

    // Change Modal buttons state
    changeBtnStatus(){
        this.setState({
            btnState: false
        });
    }

    /**
     * Save data into REACT_STATE
     * @param {Object} data 
     */
    saveData(data){
        const oldData = this.state.modalData;
        this.setState({
            modalData: {...oldData,...data}
        });
    }

    /**
     * Catch modal body data and handler it
     * @param {Object} data - Data from modal body
     */
    handlerModalResult(data){
        this.saveData(data); // Save data 
        this.changeBtnStatus();
        console.log(this.state);
    }

    render() {
        return ( 
            <div className="container">
                <div className="container my-2">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalTest">
                    Launch demo modal
                    </button>
                </div>

                <h3>My modal</h3>

                <div 
                    className="modal fade" 
                    id="modalTest" 
                    data-backdrop="static" 
                    tabindex="-1" 
                    role="dialog"
                    aria-labelledby="modalTestTitle"
                    aria-hidden="true">
                    <div 
                        className="modal-dialog modal-dialog-centered" 
                        role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 
                                    className="modal-title" 
                                    id="modalTestTitle">{this.state.title}</h6>
                            </div>
                            <div className="modal-body">
                                <BodyModal onEnd={this.handlerModalResult} />

                                <ModalSteps Steps={this.state.steps}/>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <ModalButtons btnDisable={this.state.btnState}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modal;