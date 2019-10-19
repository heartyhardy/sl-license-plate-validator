import React, {useState} from 'react';
import LicensePlateInput from './components/LicensePlateInput';
import ValidatedPlates from './components/ValidatedPlates';

import {isValidLicense, getLicenseType} from  './validator/license_validation';

import './App.css';

const App = () => {

  // Validated plate numbers array
  const [allPlates, setPlates] = useState({
    plates:[]
  });

  // Current plate number typed in the input field
  const [currentPlate, setCurrentPlate] = useState({
    plateNo: ''
  });

  const [plateValidity, setPlateValidity] = useState({
    isInvalid: false
  })

  // When the user enters a new plate number, it is validated in this function
  // IsValidLicense - Checks if the license number matches to any predefined regex patterns
  // if it does, it is a valid plate number.
  // if invalid, an alert is poped up to notify the user
  // getLicenseType function then dertermines the type of the plate number (new/ old/ vintage)
  const validatePlate = () => {
    let isValid = isValidLicense(currentPlate.plateNo);

    if(isValid){

      setPlateValidity({isInvalid:false});

      let plates = [...allPlates.plates, {isValid, plateNo:currentPlate.plateNo, licenseType: getLicenseType(currentPlate.plateNo)}];
      setPlates({plates});

    }
    else setPlateValidity({isInvalid: true});
  }

  // Stores the current input in the state
  const plateInput_changed = event => {
      setCurrentPlate({plateNo: event.target.value});
  }

  return (
    <div className="App">

      <h1>License Plate Validator</h1>

      <LicensePlateInput 
        click={validatePlate}
        changed={plateInput_changed}
        current={currentPlate.plateNo}
        isInvalid={plateValidity.isInvalid}
        />

      <ValidatedPlates validated={allPlates}/>

    </div>
  );
}

export default App;
