import {regx_keys, regx_values}  from './license_regex';


// Error flags
const INVALID_OPERATION_ERR = 500;
const INVALID_PLATE_ERR = -510;
const MATCH_ERR = 505;


/* 
    Given a plate number (STRING) this function will test its validity
*/
const isValidLicense = plateNumber => {
    let searchPos = -1;

    if(typeof(plateNumber) !== "string"){
        throw INVALID_OPERATION_ERR;      
    }
    
    try{
        searchPos = regx_values.findIndex(el => plateNumber.match(el));
    }
    catch(err){
        throw MATCH_ERR;
    }    

    return searchPos > -1 ? true : false;
}

/* 
    Given a plate number (STRING) this function will find the plate type
*/
const getLicenseType = plateNumber => {
    let searchPos = -1;

    if(typeof(plateNumber) !== "string"){
        throw INVALID_OPERATION_ERR;      
    }
    
    try{
        searchPos = regx_values.findIndex(el => plateNumber.match(el));
    }
    catch(err){
        throw MATCH_ERR;
    }    

    return searchPos > -1 ? regx_keys[searchPos] : INVALID_PLATE_ERR;
}

export {
    getLicenseType,
    isValidLicense
}