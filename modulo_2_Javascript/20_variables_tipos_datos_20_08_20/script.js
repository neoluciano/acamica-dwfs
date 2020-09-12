// Esto es un comentario. El navegador no lo interpretará

/*
Este
es
un
comentario
de
varias
líneas
*/

//Operador typeof
var numero = 92;
console.log("Tipo de número: " + typeof(numero));
var texto = "Hola";
console.log("Tipo de texto: " + typeof(texto));
var booleano = true;
console.log("Tipo de booleano: " + typeof(booleano));

//Comillas simples y dobles
var texto2 = 'Este es "el mejor" presidente que hemos tenido';
console.log(texto2);

//Infinity
var decimal = 5 / 3;
console.log(decimal);
console.log(typeof(decimal));

var numero2 = 5 / 0;
console.log("Valor del número 2: " + numero2);
console.log("Tipo del número 2: " + typeof(numero2));

//Parsear (convertir) texto a número
var numero3 = '123';
console.log("Tipo de numero 3: " + typeof(numero3));
var numero3Convertido = parseInt(numero3);
console.log("Tipo de numero 3 convertido: " + typeof(numero3Convertido));

var numeroConfuso = '1234ab5678';
var numeroConfusoConvertido = parseInt(numeroConfuso);
console.log("Valor de numero confuso: " + numeroConfusoConvertido);

var numeroConfuso2 = 'fffff1234ab5678';
var numeroConfusoConvertido2 = parseInt(numeroConfuso2); //NaN (Not A Number)
console.log("Valor de numero confuso 2: " + numeroConfusoConvertido2);
console.log("Tipo de numero confuso 2: " + typeof(numeroConfusoConvertido2))

//Chequear (revisar) si algo es un NaN
console.log("numeroConfuso2 no es un numero?" + isNaN(numeroConfusoConvertido2));
console.log("El 3 es un NaN?" + isNaN(3));

//Numero a string
var numero4 = 2547;
console.log(numero4);
console.log(typeof(numero4));
console.log(numero4.toString());
console.log(typeof(numero4.toString()));

//confirmacion
var confirmacion = confirm("Acepta las condiciones de uso?");

//Condicionales
if (confirmacion === true) {
    console.log("Has aceptado las condiciones!");
} else {
    console.log("No aceptaste");
}

//Operadores de comparacion (>, <, >=, <=, !=, ==, ===, !==)
var edad = 25;
if (edad >= 18) {
    console.log("Bienvenido al bar. ¿Qué te quieres tomar?");
} else {
    console.log("Lo sentimos... No se permite el ingreso a menores de edad");
}

//operadores lógicos: &&, ||, !
console.log("false && false = " + (false && false));
console.log("false && true = " + (false && true));
console.log("true && true = " + (true && true));
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);