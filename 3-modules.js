//Modules = encapsulated code
//CommonJS - every file is module by default

const names = require('./4-names'); //altijd als je je eigen module gebruikt beginnen met ./
const sayHi = require('./5-utils');
const data = require('./6-alternative')
require('./7-mindgrenade')
console.log(names);
console.log(data);

sayHi('Tibo');
sayHi(names.peter);
sayHi(names.jan);
