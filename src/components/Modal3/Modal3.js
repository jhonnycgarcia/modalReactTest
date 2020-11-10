import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class Test1 extends React.Component{
render(){ return( <div className="container">Test 1 {this.props.name}</div>);}
}
class Test2 extends React.Component{
    render(){ return( <div className="container">Test 2</div>);}
}
class Test3 extends React.Component{
    render(){ return( <div className="container">Test 3</div>);}
}

class Modal3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            currentModal: 0,
            modals: [<Test1 />,<Test2 />,<Test3 />,]
        }
    }

    closeModal = () => this.setState({show: false});

    renderbodyModal = () =>{
        console.log(this.state.modals);
        // const Body = this.state.modals[this.state.currentModal];
        // return (<Body />)
    }
    nextModal = () =>{
        const {currentModal} = this.state;
        const nextModal = currentModal+1;
        const setNext = (nextModal>2)?0:nextModal;
        this.setState({currentModal: setNext});
    } 

    render(){
        return (
            <Modal
                show={this.state.show}>
                <Modal.Header>
                    Title
                </Modal.Header>
                <Modal.Body>
                    Body
                    {this.state.modals[this.state.currentModal]}
                </Modal.Body>
                <Modal.Footer variant="justify-content-center">
                    <Button variant="success" onClick={this.nextModal}>Next</Button>
                    {/* <Button variant="danger" onClick={this.closeModal}>Cancel</Button> */}
                </Modal.Footer>
            </Modal>
        );
    }
}
export default Modal3;