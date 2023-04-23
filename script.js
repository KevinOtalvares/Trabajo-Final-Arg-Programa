
function iniciarMap(){
    let coordenadas = {lat: -34.4572705, lng: -58.5220594};
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coordenadas
    });
    let marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
}


let formulario = document.getElementById("formularioEventos");
let textoFeedback = document.getElementById("confirmacionFormularioEventos");
formulario.addEventListener("submit", mostrarMensajeFormularioEventos);
function mostrarMensajeFormularioEventos(event) {
    event.preventDefault();

    textoFeedback.innerHTML = "";
    if (validarFormulario()) {
        setTimeout(() => {
            textoFeedback.innerHTML = "Su conculta ha sido enviada!";
        }, 1000);
    }
}

let nombre = document.getElementById("nombre");
let mail = document.getElementById("mail");
let consulta = document.getElementById("consulta");

const tirarError = (elemento, mensaje) => {
    const padreInput = elemento.parentElement.parentElement;
    const textoError = padreInput.querySelector('.mensajeError');

    textoError.innerText = mensaje;
    textoError.style.display = 'block';
}

const campoValido = elemento => {
    const padreInput = elemento.parentElement.parentElement;
    const textoError = padreInput.querySelector('.mensajeError');

    textoError.innerText = '';
    textoError.style.display = 'none';
}

const mailEsValido = mail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function validarFormulario() {
    let nombreValor = nombre.value.trim();
    let mailValor = mail.value.trim();
    let consultaValor = consulta.value.trim();
    let formularioValido = true;

    if (nombreValor == '') {
        tirarError(nombre, "El campo no puede estar vacío!");
        formularioValido = false;
    } else {
        campoValido(nombre);
    }

    if (mailValor == '') {
        tirarError(mail, "El campo no puede estar vacío!");
        formularioValido = false;
    } else if (!mailEsValido(mailValor)) {
        tirarError(mail, "La dirección de email debe ser válida!");
        formularioValido = false;
    } else {
        campoValido(mail);
    }

    if (consultaValor == '') {
        tirarError(consulta, "El campo no puede estar vacío!");
        formularioValido = false;
    } else {
        campoValido(consulta);
    }

    return formularioValido
}

function calcularHelado(listaHelado, cantInvitados){
    // let cantInvitados = Number(document.getElementById("cantInvitados").value);
    
    let cantCucuruchos = cantInvitados + Math.floor(cantInvitados/10);
    let cantPaletas = cantInvitados + Math.floor(cantInvitados/10);
    let cantKilos = Math.floor(cantInvitados / 4);
    if (cantInvitados % 4 != 0) {
        cantKilos++;
    }
    listaHelado.innerHTML = "<li>" + cantKilos + " Kg de helado.</li>";
    listaHelado.innerHTML += "<li>" + cantKilos + " Kg de helado + " + cantCucuruchos + " cucuruchos.</li>";
    listaHelado.innerHTML += "<li>" + cantPaletas + " Lado Paletas®.</li>";
    listaHelado.innerHTML += "<li>" + Math.ceil(cantKilos/2) + " Kg de Helado + " + Math.floor(cantPaletas/2) + " Lado Paletas®.</li>";
}


let botonCalculadora = document.getElementById("botonCalculadora");
let listaHelado = document.getElementById("listaHelado");
let invitados = document.getElementById("cantInvitados");
let textoError = invitados.parentElement.parentElement.querySelector('.mensajeError');
botonCalculadora.addEventListener("click", () => {
    if (validarInvitados()) {
        calcularHelado(listaHelado, Number(invitados.value));
    }
});

function validarInvitados() {
    let invitadosValor = invitados.value.trim();
    let invitadosValido = true;

    if (invitadosValor == '') {
        textoError.innerText = "El campo no puede estar vacío!";
        textoError.style.display = 'block';
        invitadosValido = false;
    } else if (!(/^[0-9]*$/).test(invitadosValor)) {
        textoError.innerText = "El valor ingresado debe ser un número!";
        textoError.style.display = 'block';
        invitadosValido = false;
    } else if (Number(invitadosValor) < 1) {
        textoError.innerText = "El número debe ser mayor a cero!";
        textoError.style.display = 'block';
        invitadosValido = false;
    } else {
        textoError.innerText = '';
        textoError.style.display = 'none';
    }
    return invitadosValido;
}
