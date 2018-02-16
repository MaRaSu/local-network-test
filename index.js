//import find from 'local-devices';
var find = require('local-devices');
var WATCH_LIST = [
  ["0:b3:62:71:c4:77" , "Nella"],
  ["30:63:6b:d5:0:51", "Markus"],
  ["e4:e4:ab:20:e9:bf", "Milla"],
  ["4c:7c:5f:76:0e:a1", "Kiti"]
]; 

async function skannaa() {
  let a = await find(); 
  console.log("Etsitään"); 
  return a;
}

skannaa().then(printtaa);

function printtaa(devices) {
  let deviceCount = 0;
  for(let i in devices) {
    if(devices[i].mac !== "<incomplete>") {
      for(let b in WATCH_LIST) {
        if(devices[i].mac.includes(WATCH_LIST[b][0])) {
          console.log("Löytyi: " + WATCH_LIST[b][1]);
        }
      }
    }
    deviceCount = i;
  }
  console.log("Löydetty " + deviceCount + " kpl laitteita");

}
