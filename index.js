let test = "koe";
console.log(test);

//import find from 'local-devices';
var find = require('local-devices');
// var devicesList;

async function skannaa() {
  let a = await find(); 
  console.log("Hop"); 
  return a;
}

skannaa().then(val => console.log(val));
