import React from "react";
import { Badge } from 'react-bootstrap';


class Stepers extends React.Component {

    constructor(props){
        super(props);
        const stateStep = {active:false};
        this.state = {
            steps: Array(5).fill(stateStep),
        };
    }
    
    renderSteps(){
        return this.state.steps.map((step,idx)=>{
            let stepClass = ((idx+1) === Number(this.props.actualStep));
            return(
                <Badge 
                    variant={`${(stepClass)?'info':'secondary'} mx-2`} 
                    key={`keyStep${idx+1}`}>{idx+1}</Badge>
            );
        })
    }

    render(){
        return(
            <div className="row justify-content-center">
                {this.renderSteps()}
            </div>
        );
    }
}

export default Stepers;