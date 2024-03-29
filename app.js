
let numeroSecreo = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if(numeroDeUsuario === numeroSecreo){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreo){
            asignarTextoElemento('p', 'El número Secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número Secreto es mayor'); 
        }
        intentos++;
        limpairCaja();
    }
}

function limpairCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto(){
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return;
    }
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
    } 
    
    while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreo = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpairCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();