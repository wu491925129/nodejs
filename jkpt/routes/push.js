/**
 * Author:wulong
 * Email:491925129@qq.com
 * Date: 2017/4/18
 * Time: 9:38
 */
var express = require('express');
var router = express.Router();
var query = require('../Dao/mysqlDao');

/* GET home page. */
router.get('/yxdt', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('push/yxdt', { title: '监控首页',datas:[] });
        }else {
            res.render('push/yxdt', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

module.exports = router;