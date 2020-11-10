import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import Stepers from './Stepers';
import ModalDefautlBody from './ModalDefautlBody';

const Modal2 = (props) =>{

    const cancelBtn = () =>{
        props.onCancel();   // activate cancel trigger
        hideModal();
    }

    /**
     * Hide or Close Modal
     */
  const hideModal = () => {
    props.hideModal();
  };

  /**
   * Catch Modal Body Data
   */
  const catchData = async (data) =>{
    props.enableNextBtn();    // Enable button
    await props.saveData(data);    // Save data
  }

  /**
   * Handler dynamic steps
   */
  const stepNext = () =>{
      props.onNext();   // activate next trigger
      hideModal();  // close modal
    // props.handlerSteps(1);   // Next Step
  }

  /**
   * Component save and load
   */
  const loadBody = () =>{
      const Body = props.body;
      return <Body catchData={catchData}/>
  }

  return (
    <>
      <Modal 
        show={props.show} 
        backdrop="static"
        keyboard={false}
        onHide={hideModal}
        centered={true}
        onExit={props.onExit}>
        <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            {/* TODO: load dynamic this part */}
            <div className="container">
                The body <br/>
                {loadBody()}
                {/* <ModalDefautlBody catchData={catchData}/> */}
            </div>

            <div className="container">
                <Stepers actualStep={props.actualStep}/>
            </div>

        </Modal.Body>
        <Modal.Footer className="justify-content-center">

          <Button 
            variant="success" 
            disabled={!props.nextBtn}
            onClick={stepNext}>Next</Button>
          <Button variant="danger" onClick={cancelBtn}>Cancel</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal2;