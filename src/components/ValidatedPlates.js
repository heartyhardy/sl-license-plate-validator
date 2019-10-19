import React from 'react';
import './ValidatedPlates.css';

// Displays a collection of validated plate numbers
const ValidatedPlates = props => {
    return(
        <div
            className="validated-plates"
        >
            {
                props.validated.plates.map((el, index) => {
                    return(
                        <div
                            key={index}
                            className="validated-plate"
                        >
                            <p key={`pn-${index}`} className="plate-number">{el.plateNo}</p>
                            <p key={`lt-${index}`} className={`license-type ${el.licenseType}`}>{el.licenseType}</p>
                            <p key={`pv-${index}`} className="plate-validity">{`${el.isValid ? "Valid" : "Invalid"}`}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ValidatedPlates