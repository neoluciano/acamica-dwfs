function sayHi(name) {
    alert('Hola ' + name);
}

function saludar() {
    alert('Hola mis queridos estudiantes');
}

//Saludo con callback
function getName(callback) {
    let name = prompt('Ingresá tu nombre: ');
    callback(name);
}

getName(name => alert(`Hola ${name}`));

getName(sayHi);


//Calculadora con callback: suma y resta
let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let compararNumeros = (n1, n2) => n1 > n2 ? console.log(n1 + ' es mayor que ' + n2) : console.log(n2 + ' es mayor que ' + n1);
let promedio = (n1, n2) => (n1 + n2) / 2;

let calculadora = function(n1, n2, funcionAEjecutar) {
    return funcionAEjecutar(n1, n2);
}

let primerNumero = parseInt(prompt("Ingrese el primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));

console.log(calculadora(7, 5, restar));
console.log(calculadora(7, 5, sumar));
console.log(calculadora(7, 5, compararNumeros));
console.log(calculadora(7, 5, promedio));

console.log(calculadora(primerNumero, segundoNumero, restar));
console.log(calculadora(primerNumero, segundoNumero, sumar));
//Calculadora usando la misma función pero haciendo el callback inline

console.log(calculadora(7, 5, function(n1, n2) { return n1 - n2 }));
console.log(calculadora(7, 5, function(n1, n2) { return n1 + n2 }));

//Sort normal en numeros
let numeros = [3, 7, 1, 20, 10, 5, 2, 4];
numeros.sort()
console.log(numeros.sort((a, b) => {
    return a - b;
}));
//Sort normal en un objeto
let productos = [];

productos.push({ nombre: 'Pantalon', precio: 800 });
productos.push({ nombre: 'Remera', precio: 100 });
productos.push({ nombre: 'Camisa', precio: 300 });

productos.sort();
console.log(productos);

//Sort con callback propio para generar orden en la propiedad nombre
let productos2 = [];
productos2.push({ nombre: 'Remera', precio: 100 });
productos2.push({ nombre: 'Pantalon', precio: 800 });
productos2.push({ nombre: 'Camisa', precio: 300 });
productos2.sort(function(objeto1, objeto2) {
    if (objeto1.nombre < objeto2.nombre) {
        return -1;
    } else {
        return 1;
    }
});
console.log(productos2);

//Sort con callback propio para generar orden en la propiedad precio
let productos3 = [];
productos3.push({ nombre: 'Remera', precio: 100 });
productos3.push({ nombre: 'Pantalon', precio: 800 });
productos3.push({ nombre: 'Camisa', precio: 300 });
productos3.sort((valor1, valor2) => {
    if (valor1.precio < valor2.precio) {
        return -1;
    } else {
        return 1;
    }
});
console.log(productos3);

//Ejercicios de clase
let perro = {
    nombre = "Firulais",
    emitirSonido = function() {
        return 'Woof';
    }
};
let gato = {
    nombre = "Michi",
    emitirSonido = function() {
        return 'Miau';
    }
};
let vaca = {
    nombre = "Lola",
    emitirSonido = function() {
        return 'Muuu';
    }
};

function describirAnimal(nombreAnimal, unaFuncion) {
    console.log(`El animal se llama ${nombreAnimal} y hace ${unaFuncion()}`);
}

describirAnimal(perro.nombre, perro.emitirSonido);
describirAnimal(gato.nombre, gato.emitirSonido);
describirAnimal(vaca.nombre, vaca.emitirSonido);