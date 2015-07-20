var fs = require("fs");
var table = require("./CP866.json");

var hex = 0x00;
var hexObj = {};

var len = table.length;
var i = 0;

while (i < len) {
  hexObj[table[i]] = hex;
  hex++;
  i++;
}
fs.writeFileSync('encoded.json', JSON.stringify(hexObj));


