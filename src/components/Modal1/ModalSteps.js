import React from 'react';
import Stepers from './Stepers';

class ModalSteps extends React.Component {

    renderStep(i,stepOpts){
        return <Stepers key={i} idx={i} status={stepOpts.status}/>
    }
    renderStepers(){
        const steps = this.props.Steps.map((step,idx)=>{
            return(
                this.renderStep(idx+1,step)
            );
        })
        return steps;
    }

    render(){
        return(
            <div className="row justify-content-center mt-1" id="steps">
                {this.renderStepers()}
            </div>
        );
    }
}

export default ModalSteps;