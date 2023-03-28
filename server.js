var express = require("express")
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));  

app.use(express.static("public"))
app.get('/D&T', function(req,res){
    res.send(html);
})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();

var html = `<h1>Today is: `+ date +" "+ month +" "+ year +`</h1>`;

app.listen(port, ()=>{
     console.log(" app listening at" + port)});