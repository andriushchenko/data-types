var getTransformedArray = require ('./task2.js');

function cypherPhrase(obj, str) {
  return getTransformedArray(str.split(""), function(el){
    return obj[el] || el;
  }).join("");
}

module.exports.cypherPhrase = cypherPhrase;
