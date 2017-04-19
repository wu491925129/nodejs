/*
* @Author: wulong
* @Date:   2017-02-20 14:28:55
* @Last Modified by:   wulong
* @Last Modified time: 2017-03-14 10:24:44
*/
function jsCharts(){
    // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('js-charts'));

        option = {

    title: {
        text: '数据接收来源',
        left: 'left',
        top: 0,

    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            name:'接收量',
            type:'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:34123, name:'民政局'},
                {value:12000, name:'房地局'},
                {value:13000, name:'公安局'},
                {value:23410, name:'工商局'},
                {value:15600, name:'教育局'},
                {value:18700, name:'税务局'},
                {value:20000, name:'审计局'},
                {value:19000, name:'质检局'},
                {value:19300, name:'地税局'},
                {value:12000, name:'民防办'},
                {value:13000, name:'司法局'},
                {value:13410, name:'绿容局'},
                {value:5600, name:'粮食局'},
                {value:18700, name:'财政局'},
                {value:30000, name:'体育局'},
                {value:19000, name:'科委'},
                {value:29300, name:'国土资源局'},
                {value:12000, name:'新闻出版局'},
                {value:13000, name:'监狱管理局'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {

                }
            },
            labelLine: {
                normal: {

                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);

}