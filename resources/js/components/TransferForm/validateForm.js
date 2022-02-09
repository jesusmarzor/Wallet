export function validateForm(description, amount, setErrors){
    let errors = {};
    if(description === "")
        errors.description = "Se requiere una descripción";
    if(amount === 0 || typeof amount !== 'number' || isNaN(amount))
        errors.amount = "Se requiere un número";
    setErrors(errors);
    return Object.keys(errors).length === 0;
}