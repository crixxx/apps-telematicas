
'use strict'

//Comprueba el mínimo de minúsculas
function minuscule (pass, min) {
  let count=0;
  let result;
  let letter;

  for(let i = 0; i < pass.length; ++i){
    letter = pass[i].toLowerCase();
    if (letter == pass[i]) {
      count = ++count;
    }
  }
  if(count < min){
    result = false;
  }
  else{
    result = true;
  }
  return result;
}

//Comprueba el mínimo de mayúsculas
function mincapital (pass, min) {
  let count = 0;
  let result;
  let letter;

  for(let i = 0; i < pass.length; ++i){
    letter = pass[i].toUpperCase();
    if (letter == pass[i]) {
      count = ++count;
    }
  }

  if (count < min) {
    result = false;
  }
  else {
    result = true;
  }
  return result;
}

//Comprueba la longitud máxima
function maxlength(pass, length) {
  let result;
  if (pass.length > length) {
    result = false;
  }
  else{
    result = true;
  }
  return result;
}

//Comprueba el minimo de los numeros
function minnumber (pass, min) {
  let numbers = "0123456789";
  let count = 0;
  let result;

  for (let i = 0; i < pass.length; ++i){
    for (let j = 0; j< numbers.length; ++j){
      if (pass[i] == numbers[j]) {
        count = ++count;
      }
    }
  }

  if (count < min) {
    result = false;
  }
  else {
    result = true;
  }
  return result;
}


//Comprueba el mínimo de los caracteres especiales
function specialchar (pass, char, min) {
  let count = 0;
  let result;

  for (let i = 0; i < pass.length; ++i){
    for (let j = 0; j < char.length ; ++j){
        if (pass[i] == char[j]) {
          count = ++count;
        }
    }
  }

  if (count < min) {
    result = false;
  }
  else {
    result = true;
  }
  return result;
}

//Comprueba la contraseña
function check (pass) {
  let result;
  let length=20;
  let min=0;
  let cap=1;
  let num=1;
  let minspecial=1;
  let char=",.-{}[]!·$%&/()=?¿¡";

  let result1 = maxlength(pass, length);
  let result2 = minuscule(pass, min);
  let result3 = mincapital(pass, cap);
  let result4 = minnumber(pass, num);
  let result5 = specialchar(pass, char, minspecial);

  if (result1 && result2 && result3 && result4 && result5) {
    result = true;
  }
  else {
    result = false;
  }

  return result;
}

/*let pass, l, min, cap, num, spe, char ;

pass = "casa";
l = 10;
min = 0;
cap = 1;
num = 3;
spe = 5;
char = ",.-{}[]!·$%&/()=?¿¡"
console.log(check(pass,l,min,cap,num,spe,char));

pass = "pass1234!";
l = 6;
min = 5;
cap = 1;
num = 1;
spe = 1;
char = ",.!·$%&/()=?¿¡"
console.log(check(pass,l,min,cap,num,spe,char));

pass = "mM09._1edc";
l = 15;
min = 5;
cap = 1;
num = 1;
spe = 1;
char = ",.!·$%&/()=?¿¡"
console.log(check(pass,l,min,cap,num,spe,char));

pass = "09l,Mm12ajb";
l = 30;
min = 10;
cap = 1;
num = 4;
spe = 1;
char = ",.!·$%&/()=?¿¡"
console.log(check(pass,l,min,cap,num,spe,char));*/
