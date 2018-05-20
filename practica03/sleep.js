#!/usr/bin/nodejs
'use strict'

var time = new Date();

function isOK(durat){
  var valid = true;
  if(isNaN(durat)){
    valid = false;
  }else if(durat < 0){
    valid = false;
  }
  return valid;
}

function sleep(duration){
  if(isOK(duration)){
    var time_now = undefined;
    var wait = true;
    var time = new Date();
    while (wait){
      time_now = new Date();
      if(time_now - time > duration*1000){
        wait = false;
        return time_now - time;
      }
    }
  } else {
    return "Error: invalid value";
  }
}

console.log(sleep("a"));
console.log(sleep(-1));
console.log(sleep(4));
console.log(sleep(1.5));
