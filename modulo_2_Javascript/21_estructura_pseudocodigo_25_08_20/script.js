/*ciclo FOR para contar de 10 a 1*/

console.log("CICLO FOR:");
for (var i = 10; i > 0; i--) {
    if (i === 1) {
        console.log(i + " oveja");
    } else {
        console.log(i + " ovejas");
    }
}
//i++: Tomar la variable i e incrementar su valor en 1
//i--: Tomar la variable i y decrementar su valor en 1

/*ciclos while y do while, comparación de casos similares*/
/*DO WHILE*/
var num_do_while = 2;
do {
    console.log("DO WHILE dice: " + num_do_while);
    num_do_while++;
} while (num_do_while < 5);

console.log("Después del DO WHILE dice: " + num_do_while);
/*WHILE*/
var num_while = 0;
while (num_while < 5) {
    /*no se ejecuta ni una sola vez porque no cumple la condición*/
    console.log("WHILE dice: " + num_while);
    num_while++;
}
console.log("Después del WHILE dice: " + num_while);


/*condicional SWITCH*/
console.log("SWITCH:");
var num1 = parseInt(prompt("Ingrese un número"));
var operation = prompt("Ingrese operación a realizar: - + / *");
var num2 = parseInt(prompt("Ingrese otro número"));

switch (operation) {
    case "+":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case "/":
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    case "*":
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    default:
        console.log("Perdón, no conozco esa operación");
}


/*FUNCTION */
var firstName = prompt("Ingrese su nombre");
var lastName = prompt("Ingrese su apellido");

/*Definición de una función*/
function call_name(firstname, lastname) {
    alert("Function call_name dice: Hola " + firstname + " " + lastname);
    console.log("Function call_name dice: Hola " + firstname + " " + lastname);
}

function call_name(name) {
    alert("Function call_name dice: Hola " + name);
    console.log("Function call_name dice: Hola " + name);
}

/*llamar una función */
call_name(firstName);