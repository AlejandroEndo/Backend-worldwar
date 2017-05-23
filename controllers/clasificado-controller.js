/**
 * Created by Endo on 23/05/2017.
 */

exports.getAll = function (callback) {

    db.getConection().query('SELECT * FROM posts' , function (err, result) {
        if(!err){
            if(result != null){
                resultado = result;
                //console.log(resultado);
                callback(false, resultado);
            }
        } else {
            console.log(err);
        }
    });
};