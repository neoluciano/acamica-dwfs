//Selección de nodos:
let miVariable = document.getElementById('parWithId');
console.log(miVariable);
miVariable.style.textTransform = 'uppercase'; //No es buena práctica

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "#ff4f4f";
}

let parrafosConClase = document.getElementsByClassName('parWithClass');
for (let i = 0; i < parrafosConClase.length; i++) {
    parrafosConClase[i].style.textDecoration = "underline";
}

let parQuery = document.querySelector('p #parSpan');
parQuery.style.backgroundColor = '#5a5ada';

//ClassList vs ClassName
let imagen = document.getElementById('imgWithAtt');
console.log(imagen.attributes);
console.log(imagen.classList);
console.log(imagen.className);
imagen.classList.add('big');
console.log(imagen.className);
imagen.classList.remove('img');
console.log(imagen.classList);

//Obtener y modificar el id de un elemento
let oldId = document.getElementById('oldId');
console.log(oldId.id);
oldId.id = 'newId';
console.log(oldId.id);

//Modificar el contenido de un elemento tipo input
let input = document.getElementById('inputValue');
console.log(input.value);
input.value = 'Nuevo valor';
console.log(input.value);

//Obtener el primer y ultimo elemento hijos de otro elemento
let elementList = document.getElementById('elementList');
console.log(elementList.firstElementChild);
elementList.firstElementChild.innerHTML = 'Nuevo nombre';

console.log(elementList.lastElementChild);
elementList.lastElementChild.innerHTML = 'Nuevo nombre';

//Inner y Outer HTML
let titleWithSpan = document.getElementById('titleWithSpan');
console.log(titleWithSpan.innerHTML);
console.log(titleWithSpan.outerHTML);

titleWithSpan.outerHTML = "<h4 id='titleWithSpan'>Título con un <span id='titleSpan'>span</span> adentro modificado desde el script de h3 a h4</h4>";

//Modificar y establecer valores en los atributos de un elemento HTML
let imagenACambiarAtributo = document.getElementById('imgToChangeAtt');
imagenACambiarAtributo.setAttribute('src', 'https://dummyimage.com/200x120/5a5ada/aaa');
imagenACambiarAtributo.setAttribute('name', '1234');

//Realizar animaciones
let elementoAnimado = document.getElementById('animation');
elementoAnimado.animate([
    { transform: 'translatex(0px)' },
    { transform: 'translatex(300px)' },
    { transform: 'translatex(0px)' }
], {
    duration: 5000,
    iterations: Infinity
});

//Insertar nuevos elementos a nivel de hermanos y padre
let firstP = document.createElement('p');
firstP.textContent = 'Primer Párrafo: creado e insertado desde el script.';

let nodeCtn = document.getElementById('nodeCtn');
nodeCtn.appendChild(firstP);

let secondP = document.createElement('p');
secondP.textContent = 'Segundo Párrafo: creado e insertado BEFORE el primer Párrafo.';
firstP.before(secondP);

let thirdP = document.createElement('p');
thirdP.textContent = 'Tercer Párrafo: creado e insertado AFTER el primer Párrafo.';
firstP.after(thirdP);

let fourthP = document.createElement('p');
fourthP.textContent = 'Cuarto Párrafo: creado e insertado con INSERTBEFORE del segundo Párrafo.';
nodeCtn.insertBefore(fourthP, secondP);

//Quitar elementos HTML del DOM
let liToRemove = document.getElementById('liToRemove');
liToRemove.remove();

//Reemplazar elementos del DOM
let newLi = document.createElement('li');
newLi.textContent = 'Nuevo li, reemplazando a item2 con replaceWidth';
let liToReplace = document.getElementById('liToReplace');
liToReplace.replaceWith(newLi);

// localStorage
// setItem, getItem y removeItem
localStorage.setItem('nombre', 'Harry');
localStorage.removeItem('nombre');
localStorage.setItem('nombreEntero', 'Harry Potter');
console.log('El nombre alojado en el localStorage es: ' + localStorage.getItem('nombreEntero'));

let x = 'color';
// sessionStorage
// setItem, getItem y removeItem
sessionStorage.setItem(x, 'Verde');
sessionStorage.removeItem('nombre');
sessionStorage.setItem('nombreEntero', 'Hermione Jean Granger');
console.log('El nombre alojado en el sessionStorage es: ' + sessionStorage.getItem('nombreEntero'));

//Borrar lo setItem y ver las diferencias entre lo que quedo guardado en el Local y Session Storage al cerrar