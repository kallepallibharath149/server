// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

var http=require('http');

// var nodemailer = require('nodemailer');

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
res.end('Hello World');

   
    console.log(qdata,q.host,q.pathname,q.search);
}).listen(8080);