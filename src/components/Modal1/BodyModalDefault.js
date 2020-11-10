import React from "react";

class BodyModalDefault extends React.Component {

    constructor(){
        super();
        this.state = {
            value: null
        }
        this.handlerChange = this.handlerChange.bind(this);
    }

    /**
     * Finished work in this modal
     */
    handlerChange(event){
        const {value} = event.target;
        this.props.onFinished({option:value});
    }
    
    renderOptions(){
        const defaultOpts = Array(4).fill(null);
        const options = defaultOpts.map((opt,idx) => {
            return (
                <div className="btn-group-toggle mx-2" data-toggle="buttons" key={'optsDefault'+idx}>
                    <label className="btn btn-secondary py-5 px-3">
                        <input 
                            type="radio" 
                            name="options" 
                            id={`option${idx+1}`}
                            value={`option${idx+1}`}
                            onClick={this.handlerChange}/>
                        Type {idx+1}
                    </label>
                </div>
            );
        });
        return options;
    }

    render(){
        return(
            <div className="row justify-content-center py-3">
                {this.renderOptions()}
            </div>
        );
    }
}

export default BodyModalDefault;