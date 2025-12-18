/*
1
1 2
1 2 6
1 2 6 24
1 2 6 24 120

q: factorial triangel pattern

*/


function ftri(rows) {
    let fact = 1;
    let out = "";
    for(let i=1;i<=rows;i++) {
    fact = fact*i;
    out += fact + " ";
    console.log(out);
    }
    
}
module.exports = {ftri}