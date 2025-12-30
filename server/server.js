const http = require('http');
const url = require('url');
const students = [
    { id: 1, name: "raj", age: 20, course: "bca" },
    { id: 2, name: "raj1", age: 30, course: "btech" },
    { id: 3, name: "raj2", age: 40, course: "mtech" },
    { id: 4, name: "raj3", age: 35, course: "mca" },

];

function sendhtml(res, html, statusCode = 200) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

function layout(title, body) {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
</head>
<body>
    <div class="container-fluid">
    <ul class="nav float-right">
      <li class="nav-link">
        <a href="/" class="nav-link">Home</a>
      </li>
       <li class="nav-link">
        <a href="/about" class="nav-link">About</a>
      </li>
       <li class="nav-link">
        <a href="/students" class="nav-link">Student</a>
      </li>
       <li class="nav-link">
        <a href="/contact" class="nav-link">Contact</a>
      </li>
    </ul>
 </div>
 
 
 
   ${body}
    <hr/>
    
</body>
</html> 
 `

}
//create server

const server = http.createServer((req, res) => {
    const parseurl = url.parse(req.url, true);
    const path = parseurl.pathname;

    //routing

    if (path == "/") {
        return sendhtml(res, layout("Home", `<h1 class="mt-5">Home Page</h1>`));
    }
    if (path == "/about") {
        return sendhtml(res, layout("About", `<h1>About Page</h1>`));
    }
    if (path == "/students") {
        let list = `<h1 class="mt-5">Students details</h1>`;
        students.forEach(x => {
            list +=
                `
            <div class="card">
           <b>ID: </b> ${x.id} <br/>
           <b>Name: </b> ${x.name} <br/>
           <b>Age: </b> ${x.age} <br/>
           <b>Course: </b> ${x.course} <br/>
           <a href="/student?id=${x.id}">View Details</a>
           </div>
            `;
        });
         return sendhtml(res, layout("Students", list));
    }
    if (path == "/student") {

        const id = Number(parseurl.query.id);
        const st = students.find(x=>x.id ===id);
        
         const html=
                `
            <div class="card">
           <b>ID: </b> ${st.id} <br/>
           <b>Name: </b> ${st.name} <br/>
           <b>Age: </b> ${st.age} <br/>
           <b>Course: </b> ${st.course} <br/>
           <a href="/students">Back</a>
           </div>
            `;
        
         return sendhtml(res, layout("Students", html));
    }
    if (path == "/contact") {
        return sendhtml(res, layout("Contact", `<h1>Contact Page</h1>`));
    }
     return sendhtml(res, layout("404", `<h1>404 NOT FOUND</h1>`));
});
server.listen(5800, () => {
    console.log("server is running port 5800");
});