var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yuanfang',
    database: 'text'
})
router.post('/shuju', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    connection.query('SELECT * FROM text', function(err, rows, fields) {
        res.send(rows)
    })
});

router.post('/add', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    var title = req.body.a;
    var content = req.body.b;
    var zuo = req.body.c;
    console.log(title, content)
    connection.query('INSERT INTO text (name,textname,text) VALUES ("' + title + '","' + content + '","' + zuo + '")',
        function(err, rows, fields) {
            res.send(rows)
        })
});

router.post('/shan', function(req, res, next) {
    connection.query('DELETE FROM text WHERE id=' + req.body.id, function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin', "*");
        res.send(rows)
    })
});

module.exports = router;