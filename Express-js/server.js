const express = require('express');

const app = express();

const products = [
    { id: 1, name: "Laptop", price: 20000,location:"kolkata" },
    { id: 2, name: "Mobile",  price: 30000,location:"howrah" },
    { id: 3, name: "Headphone",  price: 10000,location:"jkh" },
    { id: 4, name: "Keyboard",  price: 2000,location:"demo"},

];
app.use(express.json());// json header declare....
app.get('/', (req,res)=>{
    res.send("this is product based website");
});

app.get('/about', (req,res)=>{
    res.send(products);
});

app.get('/service', (req,res)=>{
   let html = 
   `
   <h1>Product List</h1>
<table border="1" cellpadding="10">
 <tr>
    <th>ID</th>
      <th>Name</th>
        <th>Price</th>
 </tr> `;
 products.forEach(x=>{
    html += `
    <tr>
    <td>${x.id}</td>
    <td>${x.name}</td>
    <td>${x.price}</td>
    
    </tr>
    `;
 });

 html += "</table>";
 res.send(html);
   
   
});

app.post('/add', (req,res)=>{
    const {name,price,location} = req.body;
    const newproduct = {
        id:products.length +1,
        name,
        price,
        location
    };
    products.push(newproduct);
    res.send(newproduct);
});
const port = 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});