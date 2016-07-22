var getTransformedArray = require ('./task2.js');

function pluckByAttribute(arr, label) {
  return getTransformedArray(arr, function(obj) {
    return obj[label];
  })
}

module.exports.pluckByAttribute = pluckByAttribute;
