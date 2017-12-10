const Bitop = require('./bitop');

let buf = Buffer.alloc(2);
buf[0] = 174;
buf[1] = 134;
console.log(buf);
let bitop = new Bitop(buf);
console.log(bitop.read(-2),bitop.iserro);
console.log(bitop.read(2),bitop.iserro);
console.log(bitop.read(5),bitop.iserro);
console.log(bitop.read(8),bitop.iserro);
console.log(bitop.read(3),bitop.iserro);
