/**
 * Created by Endo on 23/05/2017.
 */
var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');

var router = express.Router();

var clasificadoController = require('../controllers/clasificado-controller');

router.get('/obtener', function (req, res) {
    clasificadoController.getAll(function (err, rows) {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/clasificado', function (req, res) {

});