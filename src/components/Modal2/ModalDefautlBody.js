import React from "react";
import { ButtonGroup, ToggleButton  } from 'react-bootstrap';


class ModalDefaultBody extends React.Component {

    setRadioValue = (target) =>{
        const {name, value} = target;
        this.props.catchData({[name]:value});   // catch data
    }

    render(){
        const radios = [
            { name: 'Active', value: 'type1' },
            { name: 'Radio', value: 'type2' },
            { name: 'Radio', value: 'type3' },
        ];
        return(
            <div className="row justify-content-center my-4">
                <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary mx-2 px-5 py-5"
                        name="typeInput"
                        value={radio.value}
                        // checked={radioValue === radio.value}
                        onChange={(e) => this.setRadioValue(e.currentTarget)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
        );
    }
}

export default ModalDefaultBody;