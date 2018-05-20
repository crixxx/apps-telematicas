'use strict'

let request = require('request');
var dir_base = "http://api.weatherunlocked.com/"
var recurso = "api/current/"
var localizacion;

var cadena;

function imprime(x) {
  let y = JSON.parse(x);
  let item = y;
  let cadena;

  console.log("***************************************************");
  cadena = "Latitud: [" + item.lat + "] \nLongitud: [" + item.lon + "] \nAltitud: [" + item.alt_m + "] \nTemperatura (ºC) [" + item.temp_c + "] Sensacion térmica de [" + item.feelslike_c + "] \nDescripcion: [" + item.wx_desc + "] \nHumedad: [" + item.humid_pct + "%]";

  return cadena;
}

function prediccion(latitud, longitud){
  let app_id = "416a625b"
  let app_key = "27bcccd6ef3404d9bd05c4ba92b4af5e"
  let param1 = "app_id=" + app_id + "&" + "app_key=" + app_key
  let param2 = "lang=es"
  let cadena;
  let uri = dir_base + recurso + localizacion;

  localizacion = latitud.toString() + "," + longitud.toString();
  uri = uri + "?" + param1 + "&" + param2;

  request.get(uri, function(error, response, body) {
    cadena = imprime(body);
    console.log(cadena);
    return cadena;
  });
}

function test_prediccion(){
  prediccion(40.283,-3.822);
  prediccion(35.283,-4.822);
  prediccion(12.283,-7.822);
  prediccion(50.283,-10.822);

}

test_prediccion();
