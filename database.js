/**
 * Created by Endo on 23/05/2017.
 */

var mysql = require('mysql');
var pool = null;

exports.poolConection = function (done) {
    pool = mysql.createPool({
        // 172.16.0.105 || 200.3.193.22
        host: '200.3.193.22',
        user: 'P09652_1_11',
        password: 'OdfQFUNn',
        database: 'P09652_1_11'
    });
    done(false);
};

exports.getConection = function () {
    return pool;
};