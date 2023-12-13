
const validate = (input) => {
    let errors = {};
    let regexImage = /^(http|https):\/\/[^\s]+\.png$/
    console.log("validacion", input.types);

    if (!input.name) {
        errors.name = "Campo obligatorio";
    };

    if (input.name.length > 10) {
        errors.name = "Debe ser menor a 10 caracteres";
    };

    if (!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = "El nombre solo puede contener letras";
    };

    if (!input.image) {
        errors.image = "Campo obligatorio";
    };

    if (!regexImage.test(input.image)) {
        errors.image = "Ingrese una URL de imagen PNG válida";
    }

    if (input.hp <= 0) {
        errors.hp = "HP deber ser meyor a 0";
    };

    if (input.hp >= 251) {
        errors.hp = "HP no puede ser mayor a 250"
    };

    if (input.attack <= 0) {
        errors.attack = "El ataque deber ser menor a 0";
    };

    if (input.attack >= 251) {
        errors.attack = "El ataque no puede ser mayor a 250"
    };

    if (input.defense <= 0) {
        errors.defense = "La defensa deber ser menor a 0";
    };

    if (input.defense >= 251) {
        errors.defense = "La defensa no puede ser mayor a 250"
    };

    if (input.speed <= 0 && input.speed.length) {
        errors.speed = "La velocidad deber ser menor a 0";
    };

    if (input.speed >= 251) {
        errors.speed = "La velocida no puede ser mayor a 250"
    };

    if (input.height <= 0 && input.height.length) {
        errors.height = "La altura deber ser menor a 0";
    };

    if (input.height >= 251) {
        errors.height = "La altura no puede ser mayor a 250"
    };

    if (input.weight <= 0 && input.weight.length) {
        errors.weight = " El peso deber ser menor a 0";
    };

    if (input.weight >= 251) {
        errors.weight = "El peso no puede ser mayor a 250"
    };

    // Validación de los tipos
    if (input.types.length >= 3) {
        errors.types = "Solo vas a poder seleccionar 2 tipos";
    };


    return errors;
};

export default validate;

