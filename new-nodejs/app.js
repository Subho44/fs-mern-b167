const first = require('./first')
const last = require("./last")
const basic = require("./basic");
const es6 = require("./es6");

es6.ck(6);
es6.arr();

basic.sd();
console.log(basic.cn(7));
console.log(basic.cn(8));
basic.lp(10);
basic.arr();

console.log(first.x(45,45))
console.log(last.y(20,10));