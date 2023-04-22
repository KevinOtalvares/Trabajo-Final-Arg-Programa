
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

function calcularHelado(){
    let listaHelado = document.getElementById("listaHelado");
    let cantInvitados = Number(document.getElementById("cantInvitados").value);
    
    let cantCucuruchos = cantInvitados + Math.floor(cantInvitados/10);
    let cantPaletas = cantInvitados + Math.floor(cantInvitados/10);
    let cantKilos = Math.floor(cantInvitados / 4);
    if (cantInvitados % 4 != 0) {
        cantKilos++;
    }
    listaHelado.innerHTML = "<h6>Para una cantidad de " + cantInvitados + " invitados te recomendamos las siguientes opciones:</h6>";
    listaHelado.innerHTML += "<li>" + cantKilos + " Kg de helado.</li>";
    listaHelado.innerHTML += "<li>" + cantKilos + " Kg de helado + " + cantCucuruchos + " cucuruchos.</li>";
    listaHelado.innerHTML += "<li>" + cantPaletas + " Lado Paletas®.</li>";
    listaHelado.innerHTML += "<li>" + Math.ceil(cantKilos/2) + " Kg de Helado + " + Math.floor(cantPaletas/2) + " Lado Paletas®.</li>";
}
