var express = require('express');
var router = express.Router();
var query = require('../Dao/mysqlDao');

/* GET home page. */
router.get('/', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('index', { title: '监控首页',datas:[] });
        }else {
            res.render('index', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});
router.get('/index', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('index', { title: '监控首页',datas:[] });
        }else {
            res.render('index', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

module.exports = router;
