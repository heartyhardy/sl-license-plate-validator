import React from 'react';
import './LicensePlateInput.css';

// Lets the user input a plate number. Once the Validate button pressed validatePlate() in App.js is called.
const LicensePlateInput = props => {
    return(
        <div className="plate">

            <input
                type='text'
                name='txtPlateNumber'
                placeholder="Enter license number here"
                className='plate-input'
                onChange={props.changed}
                value={props.current}
              />

            <button
               className='btnValidate'
               onClick={props.click}>
                   Validate
            </button>

            <div
                className={`${props.isInvalid ? 'error-visible' : 'error-hidden'}`}
            >
                    Invalid Plate Number!
            </div>
        </div>
    )
}

export default LicensePlateInput