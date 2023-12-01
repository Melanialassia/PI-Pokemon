
const validate = (input) => {
    let errors = {};
    let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
    let regexNumber = /^([0-9])*$/;

    if (!input.name) {
        errors.name = "Campo obligatorio";
    }

    if (input.name.length > 10) {
        errors.name = "Debe ser menor a 10 carácteres";
    };

    if (!input.image) {
        errors.image = "Campo obligatorio";
    };

    if (!regexImage.test(input.image)) {
        errors.image = "Ingrese una url valida"
    };

    if (!input.hp) {
        errors.hp = "Campo obligatorio";
    };

    if (input.hp <= 0) {
        errors.hp = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.hp)) {
        errors.hp = "Solo se permiten numeros"
    };

    if (!input.attack) {
        errors.attack = "Campo obligatorio";
    };

    if (input.attack <= 0) {
        errors.attack = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.attack)) {
        errors.attack = "Solo se permiten numeros"
    };

    if (!input.defense) {
        errors.defense = "Campo obligatorio";
    };

    if (input.defense <= 0) {
        errors.defense = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.defense)) {
        errors.defense = "Solo se permiten numeros"
    };

    if (input.speed <= 0) {
        errors.speed = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.speed)) {
        errors.speed = "Solo se permiten numeros"
    };

    if (input.height <= 0) {
        errors.height = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.height)) {
        errors.height = "Solo se permiten numeros"
    };

    if (input.weight <= 0) {
        errors.weight = "No puede ser menor a 0";
    };

    if (!regexNumber.test(input.weight)) {
        errors.weight = "Solo se permiten numeros"
    };

    if (input.types.length >= 2) {
        errors.types = "Solo vas a poder seleccionar 2 tipos"
    };


    return errors;
};

export default validate;