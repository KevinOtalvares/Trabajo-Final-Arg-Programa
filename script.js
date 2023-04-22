
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
