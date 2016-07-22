var cypherPhrase = require ('./task4.js');

function decypherPhrase(obj, str) {
  var swapObj = {};
  var key;
  for(key in obj) {
    swapObj[obj[key]] = key;
  }
  return cypherPhrase(swapObj, str);
}

module.exports.decypherPhrase = decypherPhrase;
