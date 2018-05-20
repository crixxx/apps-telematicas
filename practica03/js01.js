#!/usr/bin/nodejs
'use strict'

function print(velocidad){
  console.log("Velocidad introducida es:",vel,"m/s");
  console.log("Velocidad en Km/h:", convertkmh(vel));
  console.log("Velocidad en mph:", convertmph(vel));
}

function convertkmh(x){
  x = x * 3.6;
  return x;
}

function convertmph(x){
  x = (x * 3600)/1609.344;
  return x;
}

var vel = 10;
print(vel);

var vel = 20;
print(vel);

var vel = 30;
print(vel);
