'use strict'
var vel = 30;
var string = "km/h";
var v_result = null;


function printResult(vel,result){
  console.log(vel,"m/s is ",result);
}

function convert(vel,string){
  var error = false;

  if(string == "m/s"){
    v_result = vel;
  }else if(string == "km/h"){
    v_result = convertkmh(vel);
  }else if(string == "mph"){
    v_result = convertmph(vel);
  }else{
    console.log("Error: invalid arguments!");
  }
  printResult(vel,v_result + string);
  return v_result + " "+ string;
}

function convertkmh(x){
  x = x * 3.6;

  return x;
}

function convertmph(x){
  x = (x * 3600)/1609.344;
  return x;
}


console.log(convert(10,"km/h"));
console.log(convert(25,"km/h"));
console.log(convert(20,"mps"));
console.log(convert("10","mph"));
console.log(convert("40","mph"));
console.log(convert("30","km/h"));
