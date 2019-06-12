var express = require('express');
var router = express.Router();
var lists = [];

var db = require('../mysql-db');
db.connect();

db.query('SELECT * FROM hms_board', function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    lists = results;
});

db.end();

router.get('/', function(req, res, next) {
    res.send(lists);
});

/*router.get('/:WRITER', function (req, res, next) {
    var WRITER = req.params.WRITER;
    var list = lists.filter(function (movie) {
        return movie.WRITER === WRITER;
    });
    res.send(list);
});*/

router.get('/:UID', function (req, res, next) {
    var UID = req.params.UID;
    var list = lists.filter(function (movie) {
        return movie.UID === UID;
    });
    res.send(list);
});

module.exports = router;
