//import find from 'local-devices';
var find = require('local-devices');
// var devicesList;

async function skannaa() {
  let a = await find(); 
  console.log("Hop"); 
  return a;
}

skannaa().then(printtaa);

function printtaa(devices) {
  for(let i in devices) {
    if(devices[i].mac !== "<incomplete>") {
      console.log(devices[i]);
    }
  }
}
