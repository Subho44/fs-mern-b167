
//arrow function
export const x = msg => msg;
//Template literal 
export  const y = (name,course) => `hello ${name}, your course is ${course}`;
//spread operator(...)
export const z =()=>{
    const a = [1,2,3];
    const b = [4,5];
    const c = [...a,...b];
    return c;
}
//rest parameter(... argument)
export const sumall = (...nums)=>{
    let sum = 0;
    for (const n of nums) sum += n*n;
    return sum;
}
//api handelling 

function dummyapi(data) {
 return new Promise((reslove)=>{
    setTimeout(()=>reslove({status:"success",data}),1000);
 });
}

export async function  as() {
    console.log('fetching data: ');
    const res = await dummyapi({id:101,name:"node js"});
    return res;

}