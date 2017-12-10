# bitop.js
bit operation for nodejs

## test.js
```
const Bitop = require('./bitop');

let buf = Buffer.alloc(2);
buf[0] = 174;
buf[1] = 134;
console.log(buf);
//1010 1110 1000 0110
let bitop = new Bitop(buf);
console.log(bitop.read(-2),bitop.iserro);
console.log(bitop.read(2),bitop.iserro);
console.log(bitop.read(5),bitop.iserro);
console.log(bitop.read(8),bitop.iserro);
console.log(bitop.read(3),bitop.iserro);
```


```
<Buffer ae 86>
0 true
2 false
23 false
67 false
0 true
```
