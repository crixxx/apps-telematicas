'use strict'

var persona;
var obj;
var myJSON;

persona = { "nombre":"Cristina", "apellido":"López", "edad":27, "ciudad":null, "carrera":"Telematica",
"notaMedia":6, "asignaturas":["AT","Android","SSDD"], "termina":false };

function objectToString(persona){
  myJSON = JSON.stringify(persona);
  return myJSON;
}

function stringToObject(myJSON){
  obj = JSON.parse(myJSON);
  return obj;
}

console.log("El objeto JSON pasado a string: \n" + objectToString(persona));
console.log("==============================================");
console.log("La cadena de texto pasada otra vez a objeto: ");
console.log(stringToObject(myJSON));
