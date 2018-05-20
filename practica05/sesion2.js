'use strict'

let mensaje = '';
let input;
let localizacion = {
  nombre: "",
  latitud: undefined,
  longitud: undefined,
  precision: undefined,
  hora: undefined,
};

function getLocalizacion(latitud, longitud, precision) {
  input = prompt("¿Cómo te llamas?");
  let item = localStorage.getItem(input);

  var d = new Date();
  var hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  localizacion.nombre = input;
  localizacion.latitud = latitud
  localizacion.longitud = longitud
  localizacion.precision = precision;
  localizacion.hora = hora;

  if (item) {
    var mensaje = JSON.stringify(item);
  } else {
    console.log("{'nombre': '" + localizacion.nombre + "', 'coordenadas': ['" +localizacion.latitud + "','" + localizacion.longitud + "'], 'hora': '" + localizacion.hora + "'}");
    var mensaje = "Bienvenido " + JSON.stringify(localizacion.nombre) + " Tus coordenadas actuales son: Latitud: ";
    mensaje += JSON.stringify(localizacion.latitud) + " Longitud: ";
    mensaje += JSON.stringify(localizacion.longitud) + " (mas menos " + JSON.stringify(localizacion.precision) + " metros)";
  }

  localStorage.setItem(localizacion.nombre, JSON.stringify(localizacion));
  console.log(mensaje);
  return mensaje;
};
