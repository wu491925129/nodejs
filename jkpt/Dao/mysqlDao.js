/**
 * Author:wulong
 * Email:491925129@qq.com
 * Date: 2017/4/10
 * Time: 16:22
 */
// 实现与MySQL交互
var mysql = require('mysql');
var conf = require('../conf/db')
var pool  = mysql.createPool({
    connectionLimit : 10,   //一次创建最大连接数 默认10
    multipleStatements:true,//设置为可以多表查询
    host            : conf.host,
    user            : conf.user,
    password        : conf.password,
    database        : conf.database,
    port            : conf.port
});
var query=function(sql,callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, vals, fields) {
            // 释放当前连接
            connection.release();
            if (err) throw err;
            // 事件回调
            callback(err, vals, fields);
        });
    });
};
module.exports=query;  
