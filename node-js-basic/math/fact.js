function f(n) {
    let x = 1;
    for(let i=1;i<=n;i++) {
        x = x*i;
    }
    console.log(x);
}
module.exports = {f}