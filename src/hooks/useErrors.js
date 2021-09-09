import { useState } from 'react';

function initialState(validations) {
    const state = {};
    for (const field in validations) {
        state[field] = { valid: true , helperText: null}
    }
    return state;
}

function useErrors(validations) {
    const state = initialState(validations);
    const [erros, setErros] = useState(state);

    const validateForm = (ev) => {
        const { name, value } = ev.target;
        const validation = { ...erros }
        validation[name] = validations[name](value);
        setErros(validation);
    }

    const chkFormErrors = () => {
        let ret = true;
        for (const key in erros) {
            if (Object.hasOwnProperty.call(erros, key)) {
                if ( !erros[key].valid ){
                    return false;
                }
            }
        }
        return ret;
    }

    return [erros, validateForm, chkFormErrors];
}

export default useErrors;