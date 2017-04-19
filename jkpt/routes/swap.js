/**
 * Author:wulong
 * Email:491925129@qq.com
 * Date: 2017/4/14
 * Time: 13:31
 */
var express = require('express');
var router = express.Router();
var query = require('../Dao/mysqlDao');
var swapSql = require('../conf/swapConfSql')

// 将需要的数据用json传出去
router.post('/getSwapNode', function(req, res, next) {
    //获取前台点击的index
    var index = req.body.index;
    console.log(swapSql.selectSwapNode+index);
    query(swapSql.selectSwapNode+index+swapSql.selectDepartment,function (err,vals,fields) {
        if(err){
            res.json();
        }else {
            res.json({vals:vals});
            console.log(vals);
        }
    })
});

/* 交换监控-节点状态监控 */
router.get('/jdzt', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/jdzt', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/jdzt', { title: '监控首页',datas:vals});
        }
    })
});


/* 交换监控-数据交换量监控_月 */
router.get('/sjjhl', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/sjjhl', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/sjjhl', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

/* 交换监控-数据交换量监控_年 */
router.get('/sjjhl-year', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/sjjhl-year', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/sjjhl-year', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

/* 交换监控-交换数量统计 */
router.get('/jhjgtj', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/jhjgtj', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/jhjgtj', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

/* 交换监控-交换质量统计 */
router.get('/jhzltj-detail', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/jhzltj-detail', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/jhzltj-detail', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

/* 交换监控-交换日志查看 */
router.get('/jhrzck', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/jhrzck', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/jhrzck', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});
/* 交换监控-交换质量统计-按部门 */
router.get('/getjd', function(req, res, next) {
    query('select * from department_info;select * from swap_data;',function (err,vals,fields) {
        if(err){
            res.render('swap/getjiedian', { title: '监控首页',datas:[] });
        }else {
            res.render('swap/getjiedian', { title: '监控首页',datas:vals});
            // console.log(vals);
        }
    })
});

module.exports = router;