/*
const USUARIO = "Alejandro";
const CONTRASENA = "123456";

function validarDatos(usuario, contrasena) {
    return (usuario !== USUARIO || contrasena !== CONTRASENA);
}

do {
    alert("Le vamos a solicitar su usuario y contraseña")
    var usuarioIngresado = prompt("Ingrese su usuario");
    var contrasenaIngresada = prompt("Ingrese su contraseña");
} while (validarDatos(usuarioIngresado, contrasenaIngresada));

alert("Bienvenido " + usuarioIngresado);

console.log(validarDatos("Ana", "Perrito"));
*/
var suma = 0;
for (var i = 1; i <= 5; i++) {
    var numeroIngresado = prompt("Ingrese el número " + i);
    suma = suma + parseInt(numeroIngresado);
}
alert("La suma total es: " + suma);
alert("El promedio total es: " + (suma / 5));