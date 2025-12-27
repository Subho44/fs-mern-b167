const  ck = num => console.log(num %2 == 0 ? `${num} even` : `${num} odd`);
const arr=()=> {
    let emp = ["a","b"];
    let newemp = [...emp,"c","d"];
    console.log(newemp);
} 

module.exports = {ck,arr};