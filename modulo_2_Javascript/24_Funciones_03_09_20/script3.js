let radio = parseFloat(prompt("Ingresa el valor del radio de un circulo"));

function diametroDeCirculo(x) {
    return 2 * x;
}

function calcularCircunferencia(x) {
    return diametroDeCirculo(x) * Math.PI;
}

alert(`El diametro para el radio ingresado es: ${diametroDeCirculo(radio)}`);
alert(`La circunferencia del círculo para el radio ingresado es: ${calcularCircunferencia(radio)}`);