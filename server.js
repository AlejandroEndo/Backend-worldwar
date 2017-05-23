/**
 * Created by Endo on 22/05/2017.
 */
var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var multer = require('multer');

var db = require('./database');
var users = require('./routes/user-router');

var app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.use(multer({dest : './uploads/'}).single('photo'));

db.poolConection(function (err) {
    if(err){
        console.log("Error al conectarse a la Base de datos");
        process.exit(1);
    } else {
        var port = process.env.PORT || 8080;

        app.listen(port, function () {
            console.log(port);
        });
    }
});