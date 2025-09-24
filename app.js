// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(nombreAmigo);
    limpiarInput();
    listaAmigos();
}

// funcion para actualizar lista de amigos
function listaAmigos(){
    // No use .value porque se necesita el Elemento html pero no su valor como
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaDeAmigos.appendChild(nuevoAmigo);
    }
}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}

//funcion para sortear el nombre de un amigo
function sortearAmigo() {
    if(amigos.length === 0){
        alert("Por favor, inserte un nombre");
        return;
    }

    let numeroSorteo = Math.floor((Math.random() * amigos.length));
    console.log(numeroSorteo);

    let ListaResultado = document.getElementById('resultado');
    ListaResultado.innerHTML = "";

    let nombreResultadoSorteo = document.createElement("li");
    nombreResultadoSorteo.textContent = amigos[numeroSorteo];

    ListaResultado.appendChild(nombreResultadoSorteo);
}