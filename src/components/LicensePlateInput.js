import React from 'react';
import './LicensePlateInput.css';

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
        </div>
    )
}

export default LicensePlateInput