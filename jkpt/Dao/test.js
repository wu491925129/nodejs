
/**
 * Author:wulong
 * Email:491925129@qq.com
 * Date: 2017/4/11
 * Time: 10:37
 */
var query = require('../models/index');
query("SELECT * FROM swap_jd;select * from swap_data;",function(err,vals,fields){
    console.log(vals)
});

