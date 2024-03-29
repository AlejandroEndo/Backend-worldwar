/**
 * Created by Endo on 23/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');

var userControl = require('../controllers/user-controller');

var router = express.Router();
router.use(bodyparser.urlencoded({extended:false}));

router.post('/login', function (req, res) {
    var nick = req.body.nick;
    var pass = req.body.pass;
    console.log(req.body);

    if(nick == undefined || pass == undefined){
        res.json(false);
        console.log("No llega nada.");
    } else {
        userControl.login(nick, pass, function (err, result) {
            if(!err) {
                res.json(result);
                //res.redirect('http://localhost:5000/');
                console.log(result);
            } else {
                res.json(err);
                console.log(err);
            }
        });
    }
});

router.post('/registro', function (req, res) {

    var nick = req.body.nick;
    var nombre = req.body.nombre;
    var telefono = req.body.telefono;
    var pass = req.body.pass;

    userControl.registrar(nick, nombre, telefono, pass, function (err) {
        if(!err){
            res.json(true);
        } else {
            res.json(false);
        }
    });
});

module.exports = router;