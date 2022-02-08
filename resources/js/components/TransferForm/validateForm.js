export function validateForm(description, amount, setErrors){
    let errors = {};
    if(description === "" || description === null)
        errors.description = "Se requiere una descripción";
    if(amount === "" || amount === 0 || amount === null || typeof amount !== 'number')
        errors.amount = "Se requiere un número";
    setErrors(errors);
    return Object.keys(errors).length === 0;
}