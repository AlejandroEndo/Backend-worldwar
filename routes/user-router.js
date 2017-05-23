/**
 * Created by Endo on 23/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');

var router = express.Router();
router.use(bodyparser.urlencoded({extended:false}));

router.post('/registro', function (req, res) {
    var nick = req.body.nick;
    var nombre = req.body.nombre;
    var telefono = req.body.telefono;
    var pass = req.body.pass;


});