
function validarCPF(value)
{
    if(value.length < 11){
        return { valid: false, helperText: "CPF deve ter 11 dígitos."}
    } 

    return { valid: true , helperText: null}
}

function validarCEP(value)
{
    if(value.length < 7){
        return { valid: false, helperText: "Cep deve ter 7 dígitos."}
    } 

    return { valid: true , helperText: null}
}

function validarPassword(value)
{
    if(value.length < 4 ||  value.length > 72){
        return { valid: false, helperText: "Password inválido. O campo deve ter entre 4 e 72 dígitos."}
    } 

    return { valid: true , helperText: null}
}

const validation = (() => {
    return {
        cpf: validarCPF,
        password: validarPassword,
        cep: validarCEP
    }
})();

export default validation;