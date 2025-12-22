let name= "ardent";
console.log("name:",name);

const m = require("./math/oddeven");
const l =require("./math/loops");
const facto = require("./math/fact");
const f1 = require("./math/ftriangle");
const es = require('./math/es6part');

m.checkoddeven(8); 
l.ex(10);
facto.f(5);
f1.ftri(5);
console.log(es.x('sucessfully login'));
console.log(es.y('raj','mernstack'));
console.log(es.z());
console.log(es.sumall(1,2,3,4,5));
(
    async()=>{
        console.log("\n async/await: ");
        const res = await es.as();
        console.log("api result: ", res);
    }
)();