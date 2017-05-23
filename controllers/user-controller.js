/**
 * Created by Endo on 23/05/2017.
 */

var db = require('../database');

exports.login = function (nick, pass, callback) {
    db.getConection().query('SELECT * FROM usuarios where nick = ?', nick, function (err, rows) {
        if (!err) {
            //console.log(rows);
            if(rows[0] != null) {
                if (rows[0].pass == pass) {
                    //console.log("Datos correctos");
                    loged = true;
                    callback(false, rows);
                } else {
                    //console.log(pass);
                    callback(true);
                }
            } else {
                //console.log("Usuario incorrecto");
                callback(true);
            }
        } else {
            console.log(err);
        }
    });
};

exports.registrar = function (nick, nombre, telefono, pass, done) {

    var usuario = {
        nick: nick,
        nombre: nombre,
        telefono: telefono,
        pass: pass
    };

    db.getConection().query('INSERT INTO usuarios SET ?', usuario, function (err, rows) {
        if(err){
            return done(err);
        }
        done(null, rows);
    });
};