var codec = require('./encoded.json');

var encode = function(string) {
  var len = string.length;
  var buffArray = [];
  for (var i = 0; i < len; i++) {
    if (codec.hasOwnProperty(string[i])) {
      buffArray.push(codec[string[i]]);
    } else {
      buffArray.push(42);
    }
  }
  return new Buffer(buffArray);
};

module.exports = {
  encode: encode
};