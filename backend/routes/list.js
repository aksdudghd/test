var express = require('express');
var router = express.Router();
var lists = [];

var db = require('../mysql-db');
db.connect();

db.query('SELECT * FROM board', function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    lists = results;
});

db.end();

router.get('/', function(req, res, next) {
    res.send(lists);
});

router.get('/:CATAGORY', function (req, res, next) {
    var CATAGORY = req.params.CATAGORY;
    var list = lists.filter(function (movie) {
        return movie.CATAGORY === CATAGORY;
    });
    res.send(list);
});

router.get('/:CATAGORY/:UID', function (req, res, next) {
    var UID = req.params.UID;
    var list = lists.filter(function (movie) {
        return movie.UID === UID;
    });
    res.send(list);
});

/*router.get('/:CATAGORY', function (req, res, next) {
    var CATAGORY = req.params.CATAGORY;
    var list = lists.filter(function (movie) {
        return movie.CATAGORY === CATAGORY;
    });
    res.send(list);
});*/

module.exports = router;
