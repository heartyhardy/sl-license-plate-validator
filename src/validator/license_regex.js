
// Adding the regex for each plate type

const plate_types = {
    vintage: /^\s*[0-9]{1,2}\s+[sSrRiI]{3}\s+([0-9]{4})\s*$/g,
    old:  /^\s*[0-9]{2,3}(\s*[-|\s{1}]\s*)[0-9]{4}\s*$/g,
    new: /^\s*([a-zA-Z]{0}\s*|[a-zA-Z]{2}\s+)\s*[a-zA-Z]{2,3}(\s*[-|\s]\s*)[0-9]{4}\s*$/g
}

// Separating the keys and values for clarity

const regx_values = Object.values(plate_types);
const regx_keys = Object.keys(plate_types);

export {
    plate_types,
    regx_values,
    regx_keys
 };
