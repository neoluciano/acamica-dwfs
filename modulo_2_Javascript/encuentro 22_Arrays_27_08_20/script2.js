const ARREGLO = ['Hola', 4, true, 5, "Esto es un mensaje", {}, () => {}];
let suma = 0;
let arregloNoNumerico = [];
for (var i = 0; i < ARREGLO.length; i++) {
    let valor = parseInt(ARREGLO[i]);
    if (!isNaN(valor)) {
        suma += valor; //suma = suma + valor;
    } else {
        console.log("Valor de i: " + i + ". Vamos a agregar " + ARREGLO[i]);
        arregloNoNumerico.push(ARREGLO[i]);
    }
}
alert("La suma total da como resultado: " + suma);
console.log(arregloNoNumerico);