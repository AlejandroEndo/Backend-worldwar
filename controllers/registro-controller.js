/**
 * Created by Endo on 23/05/2017.
 */

var db = require('../database');

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