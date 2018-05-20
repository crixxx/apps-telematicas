'use strict'
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
var mensaje = '';
let usuario;

function success(pos) {
  var x = pos.coords;

  var precision = x.accuracy.toFixed(3)
  var latitud = x.latitude.toFixed(3)
  var longitud = x.longitude.toFixed(3)

  var d = new Date();
  var hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  mensaje += 'Latitud:' + latitud + ' Longitud:' + longitud + " (mas menos " + precision + " metros)";
  mensaje += ' a las ' + hora;

  localStorage.setItem("posicion", mensaje);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

function eliminaStorage() {
  for (let clave in localStorage) {
    localStorage.removeItem(clave);
  }
}

function localiza() {
  usuario = prompt("¿Cómo te llamas?");

  let item = localStorage.getItem(usuario);

  if (item) {
    let cadena = 'Hola de nuevo ';
    cadena += usuario;
    navigator.geolocation.getCurrentPosition(success, error, options);
    cadena += ", tu ultima visita fue con la posicion " + localStorage.getItem("posicion");
    return cadena;
  } else {
    let cadena = 'Hola ';
    cadena += usuario;
    navigator.geolocation.getCurrentPosition(success, error, options);
    cadena += ". Tu posicion actual es " + localStorage.getItem("posicion");
    return cadena;
  }
};
