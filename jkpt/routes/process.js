var express = require('express');
var router = express.Router();
var query = require('../Dao/mysqlDao');

router.get('/dlrz', function(req, res, next){
    res.render('process/dlrz', { title: '登录日志',datas:[] });
});
router.get('/czrz', function(req, res, next){
    res.render('process/czrz', { title: '操作操作',datas:[] });
});

module.exports = router;