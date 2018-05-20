
'use strict'
class Calculadora {
  constructor(operando, num, operador) {
    this.operando = operando;
    this.num = num;
    this.operador = operador;
  }
}

function testCalc() {
  var calc = new Calculadora(0, 0, 0);

  console.log(getKey( "1", calc))
  console.log(getKey( "0", calc))
  console.log(getKey( "/", calc))
  console.log(getKey( "5", calc))
  console.log(getKey( "=", calc))
  console.log(getKey( "7", calc))
  console.log(getKey( "*", calc))
  console.log(getKey( "8", calc))
  console.log(getKey( "+", calc))
  console.log(getKey( "9", calc))
  console.log(getKey( "-", calc))
  console.log(getKey( "5", calc))
  console.log(getKey( "c", calc))
}

function number(key) {
  let numbers = "0123456789";
  let result;

  for (let j = 0; j < numbers.length; ++j){
    if (key == numbers[j]) {
      result = true;
    }
  }
  return result;
}

function operac(key) {
  let operators = "+-/*";
  let result = false;

  for (let j = 0; j < operators.length; ++j){
    if (key == operators[j]) {
      result = true;
    }
  }
  return result;

}

function operation (calc) {
  let result;

  if (calc.operador == "+") {
    result = Number(calc.num) + Number(calc.operando)
  } else if (calc.operador == "-") {
    result = Number(calc.num) - Number(calc.operando)
  } else if (calc.operador == "/") {
    result = Number(calc.num) / Number(calc.operando)
  } else if (calc.operador == "*") {
    result = Number(calc.num) * Number(calc.operando)
  }

  return result;
}

function getKey(key,calc) {
  let result;

  if (operac(key)== true){
    if (calc.operador == 0) {
      calc.num = calc.operando;
    } else {
      calc.num = operation(calc);
    }

    calc.operando = 0;
    calc.operador = key;
    return calc.num;

  } else if (key == ("c" || "C")) {
    calc.operando = 0;
    calc.num = 0;
    calc.operador = 0;
    return calc.num;

  } else if (key == "=") {
    result = operation(calc)
    calc.num = 0;
    calc.operando = 0;
    calc.operador = 0;
    return (result);
  } else if (number(key)== true) {
    calc.operando = Number(calc.operando * 10) + Number(key);
    return calc.operando;
  } else {
    return ("Invalid Key!");
  }

}

testCalc();
