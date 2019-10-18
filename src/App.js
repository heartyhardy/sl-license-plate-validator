import React, {useState} from 'react';
import LicensePlateInput from './components/LicensePlateInput';
import ValidatedPlates from './components/ValidatedPlates';

import {isValidLicense, getLicenseType} from  './validator/license_validation';

import './App.css';

const App = () => {

  const [allPlates, setPlates] = useState({
    plates:[]
  });

  const [currentPlate, setCurrentPlate] = useState({
    plateNo: ''
  });

  const validatePlate = () => {
    let isValid = isValidLicense(currentPlate.plateNo);

    if(isValid){
      let plates = [...allPlates.plates, {isValid, plateNo:currentPlate.plateNo, licenseType: getLicenseType(currentPlate.plateNo)}];
      setPlates({plates});
    }
    else alert("Invalid Plate Number!");
  }

  const plateInput_changed = event => {
      setCurrentPlate({plateNo: event.target.value});
  }

  return (
    <div className="App">

      <h1>License Plate Validator</h1>

      <LicensePlateInput 
        click={validatePlate}
        changed={plateInput_changed}
        current={currentPlate.plateNo}/>

      <ValidatedPlates validated={allPlates}/>

    </div>
  );
}

export default App;
