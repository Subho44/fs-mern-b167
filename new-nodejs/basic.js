//variable + datatypes

function sd() {
    let name = "subhojit"; // string
    const age =30; //number
    const isStudent = true;  // boolean 

    let n = null ; // null
    let u;         //undefine
    let obj = {city:"kolkata"}; // object
    let arr = [10,20,30]; // array

    console.log("variables& datatypes example:");
    console.log("name: ", name , "|type: ", typeof name);
    console.log("age: ", age , "|type: ", typeof age);
    console.log("isStudent: ", isStudent , "|type: ", typeof isStudent);
    console.log("null: ", n , "|type: ", typeof n);
    console.log("undefined: ", u , "|type: ", typeof u);
    console.log("object: ", obj , "|type: ", typeof obj);
    console.log("array: ", arr , "|type: ", typeof arr);
}

function cn(num) {
console.log("check odd-even number:");
if(num % 2 == 0) return `${num} is even`;
                return `${num} is odd`;
}

function lp(limit) {
    console.log("loops....");
    for(let i=1; i<=limit; i++) {
        console.log(i);
    }
}

function arr() {
    console.log("Array...");
    let numbers = [1,2,3,4,5];
    console.log("original value:",numbers);
    //last element add
    numbers.push(6);
    console.log("after push: ", numbers);
   //maping
   let db = numbers.map(x=>x*2);
   console.log("map:",db);
}

module.exports= {sd,cn,lp,arr};