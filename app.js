var app = require('express')();
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const db = require('./config/db.config');
var Category = db.category;

//Routes
var admin_router = require('./routes/admin.routes.js');
var router = require('./routes/router.js')

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

db.sequelize.sync({force: false}).then(() => {
    console.log('create table sync { force: false }');
    //initial();   
  });
  

app.use('/public', express.static('public'));

//Router
app.use('/', admin_router); 
app.use('/', router); 
app.get('*', function(req, res, next){
    res.status(404);
    res.render('404.ejs', {
        title: "Page Not Found",
    });

});
http.listen(8000, function(){
  console.log('listening on *:8000');
});
app.use(fileUpload()); // configure fileupload

