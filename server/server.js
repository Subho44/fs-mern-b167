const http = require('http');
const students = [
    {id:1, name:"raj", age:20},
    {id:2, name:"raj1", age:30},
    {id:3, name:"raj2", age:40},
    {id:4, name:"raj3", age:35},

];

//create server

const server = http.createServer((req,res)=>{
    // header file
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("welcome to ardent");
    res.write("\n");
     res.write("students details: \n");

     students.forEach(x=>{
        res.write(

        `
        <p>
              Id:${x.id}
              <br>
               Name:${x.name}
              <br>
               Age:${x.age}
              <br>


        </p>
         ` )
     });
    res.end();
});
server.listen(5800,()=>{
    console.log("server is running port 5800");
});