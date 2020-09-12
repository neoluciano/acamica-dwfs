let usuarios = [];
let cantidadUsuarios = 5;

let guardarUsuario = () => {
    try {
        let usuario = prompt('Ingrese un usuario nuevo');
        let existe = usuarios.find(x => x === usuario);
        /*
        let existe = false;
        for(let i = 0; i < usuarios.length; i++){
            if (usuarios[i] === usuario){
                existe = true;
                break;
            }
        }
        */
        if (!existe) {
            usuarios.push(usuario);
            alert(`Bienvenido ${usuario}`);
        } else {
            throw new Error("El usuario ya existe. Ingrese otro usuario");
        }
    } catch (error) {
        alert(error);
    }
}

do {
    guardarUsuario();
} while (usuarios.length < cantidadUsuarios)

console.log(usuarios);