// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

var http=require('http');
var url = require('url');
var mysql= require('mysql');
// var nodemailer = require('nodemailer');
var fs = require('fs');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result[0]);
      });
  });
// var transport=nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'kallepallibharath@gmail.com',
//         pass:'Raju@123'
//     }
// });
// var mailOptions = {
//     from: 'kallepallibharath@gmail.com',
//     to: 'bharathsatyakrishnaraju.k@chargeback360.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
//   };
  
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
//    fs.readFile('demo.html',function(err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//    })

   var q=url.parse(adr,true);
   res.write(q.host);
   res.write(q.pathname);
   res.write(q.search);
    var qdata=q.query;
    console.log(qdata,q.host,q.pathname,q.search);
}).listen(8080);