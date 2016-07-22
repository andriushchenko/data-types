var pluckByAttribute = require ('./task3.js');
var cypherPhrase = require ('./task4.js');

function getTopNRichestNames(num, arr){
  var newArr = [];
  newArr = arr.map(function(obj) {
    obj['income'] = cypherPhrase({'B': 'e9', 'M': 'e6', 'K': 'e3'}, obj['income']);
    return obj;
  });
  newArr = newArr.sort(function(objA, objB){
    a = parseFloat(objA['income']);
    b = parseFloat(objB['income']);
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  return pluckByAttribute(newArr.slice(0, num), 'name');
}

module.exports.getTopNRichestNames = getTopNRichestNames;
