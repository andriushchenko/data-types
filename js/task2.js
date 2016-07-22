var forEach = require ('./task1.js');

function getTransformedArray(arr, runFunction) {
  var newArr = [];
  var i = 0;
  forEach (arr, function (el) {
    newArr[i++] = runFunction(el);
  })
  return newArr;
}

module.exports.getTransformedArray = getTransformedArray;
