import React from "react";
import { Button } from 'react-bootstrap';
import Modal2 from "./Modal2/Modal2";


class HandlerModal extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            modalTitle: this.props.title,
            showModal: this.props.show,
            step: Number(this.props.step),
            nextBtn: false,
            nextOpt: false,
            cancelOpt: false,
            modalData: {}
        };

        this.showModal = this.showModal.bind(this);
        this.saveModalData = this.saveModalData.bind(this);
    }

    /**
     * Show Modal
     */
    showModal(){
        this.setState({
            showModal:true
        });
    };

    /**
     * Hidden Modal
     */
    hideModal = () => {
        this.setState({showModal:false});
        this.restartNextBtn();
    }

    /**
     * Detect if cancel or next button was used
     */
    changeCancelOpt = () => this.setState({cancelOpt:true})
    changeNextOpt = () => this.setState({nextOpt:true})
    

    /**
     * Enable Next button
     */
    enableNextBtn = () => this.setState({nextBtn: true});

    /**
     * Restart Next Btn
     */
    restartNextBtn = () => this.setState({nextBtn: false});

    /**
     * Handler Steps
     */
    handlerSteps = (nroStep = 1) => {
        const newStep = (Number(this.state.step) +  Number(nroStep)), setStep = (newStep >5)?1:newStep;
        this.setState({
            step: setStep
        });
    }

    /**
     * Restart modal State
     */
    restartState = () => {
        const defautlState = {
            modalTitle: "Default Title",
            showModal: false,
            step: 1,
            nextBtn: false,
            nextOpt: false,
            cancelOpt: false,
            modalData: {}
        };
        const val = Object.assign({},defautlState);
        this.setState({...val});
    }


    onExit = () => {
        console.log('onExit');
        console.log(this.state);
        this.restartState();
    }

    /**
     * Save data of Modal
     */
    async saveModalData(data){
        const modalData = Object.assign({},this.state.modalData,data);
        await this.setState({modalData});
        // console.log('modal state: ',this.state);
    }

    /**
     * Catch Modal Body Data
     */
    handlerModalData = () => {
        console.log('modalData: ',this.state.modalData);
    }

    render(){
        return(
            <div className="mt-3">
                <Button variant="primary" onClick={this.showModal}>Display Modal</Button>

                <Modal2 
                    show={this.state.showModal} 
                    hideModal={this.hideModal} 
                    title={this.state.modalTitle} 
                    actualStep={this.state.step}
                    nextBtn={this.state.nextBtn}
                    enableNextBtn={this.enableNextBtn}
                    handlerSteps= {this.handlerSteps}
                    body={this.props.bodyComponent}
                    saveData={this.saveModalData}
                    onExit={this.onExit}
                    onCancel={this.changeCancelOpt}
                    onNext={this.changeNextOpt}
                    />
            </div>
        );
    }
}

export default HandlerModal;