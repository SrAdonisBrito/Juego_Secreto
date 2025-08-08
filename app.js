let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";

function desabilitarBoton() {
    document.getElementById("reiniciar").removeAttribute("disabled");
}
function habilitarBoton() {
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
        desabilitarBoton();
    } else {
        //El usuario no acertó.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento ("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generadorNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se han sorteados todos los numeros posibles.")
    }
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generadorNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generadorNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje inicial, generar numero y contador
    condicionesIniciales();
    //Habilitando atributo "disabled "
    habilitarBoton();
}

condicionesIniciales();
