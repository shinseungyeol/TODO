var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tlstmdduf5",
    database: "todoDB"
                                
});
connection.connect();


var server = app.listen(3000,function(){
    console.log("Express server has started on port 3000");
});

var router = require('./router/main')(app,fs,connection);
