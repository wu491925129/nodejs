/*
* @Author: wulong
* @Date:   2017-03-09 10:51:42
* @Last Modified by:   wulong
* @Last Modified time: 2017-03-22 11:07:55
*/

 function jdMonthCharts(){

       // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('jd-charts'));

        // 指定图表的配置项和数据
        var dataMap = {};
function dataFormatter(obj) {
    var pList = ['民政局','房地局','公安局','工商局','教育局','税务局','审计局','质检局','地税局','民防办','司法局','绿容局','粮食局','财政局','体育局','科委','国土资源局','新闻出版局','监狱管理局','生产监督管理局'];
    // var pList = ['民政局','房地局','公安局','工商局','教育局','税务局','审计局','质检局'];
    var temp;
    for (var month = 1; month <= 12; month++) {
        var max = 0;
        var sum = 0;
        temp = obj[month];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[month][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[month + 'max'] = Math.floor(max / 100) * 100;
        obj[month + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataFSL = dataFormatter({
    //max : 60000,
    12:[43245,65465,23123,45545,12312,43453,56454,12321,65465,23123,45545,12312,43453,56454,65465,23123,45545,12312,42432,88765],
    11:[12312,43534,43535,64364,35243,23234,35455,56654,65465,23123,45545,12312,43453,56454,12321,65465,23123,45545,65465,23123],
    10:[31232,23435,56564,23234,76534,13223,43535,56565,35243,23234,35455,56654,65465,23123,45545,12312,43453,56454,12321,65465],
    9:[76342,13242,42353,23123,75643,32131,43546,21312,76534,13223,43535,56565,35243,23234,35455,56654,65465,23123,45545,121234],
    8:[52312,43242,56566,12321,66675,87899,23244,56798,56564,23234,76534,13223,43535,56565,35243,23234,35455,56654,65465,23123],
    7:[43435,12313,54365,65464,75475,74574,32312,21343,43535,64364,35243,23234,35455,56654,65465,23123,45545,12312,43453,56454],
    6:[43245,65465,23123,45545,12312,43453,56454,12321,56566,12321,66675,87899,23244,56798,56564,23234,76534,13223,43535,56565],
    5:[12312,43534,43535,64364,35243,23234,35455,56654,43534,43535,64364,35243,23234,35455,56654,65465,23123,45545,12312,43453],
    4:[31232,23435,56564,23234,76534,13223,43535,56565,12313,54365,65464,75475,74574,32312,21343,43535,64364,35243,23234,35455],
    3:[76342,13242,42353,23123,75643,32131,43546,21312,43242,56566,12321,66675,87899,23244,56798,56564,23234,76534,13223,43535],
    2:[52312,43242,56566,12321,66675,87899,23244,56798,23435,56564,23234,76534,13223,43535,56565,12313,54365,65464,75475,74574,],
    1:[28931,65532,22345,87653,35687,93547,10345,23416,56566,12321,66675,87899,23244,56798,56564,23234,76534,13223,43535,56565]
});

dataMap.dataJSL = dataFormatter({
    //max : 60000,
    12:[12324,54353,12424,34242,53252,21313,43242,42345,43425,21313,43242,54353,54563,23443,42342,53252,21313,43242,42345,43425],
    11:[32423,43425,21313,43242,54353,54563,23443,42342,54353,12424,34242,53252,21313,43242,42345,43425,21313,43242,54353,54563],
    10:[65654,32435,43534,65756,32425,57567,24234,54546,43425,21313,43242,54353,54563,23443,42342,54353,12424,34242,53252,21313],
    9:[35345,65465,76768,87686,34244,54353,65767,12323,43534,65756,32425,57567,24234,54546,43425,21313,43242,54353,54563,23443],
    8:[34223,54546,76576,87687,32131,35345,56765,21313,65465,76768,87686,34244,54353,65767,12323,43534,65756,32425,57567,45633],
    7:[21412,42342,43535,12313,41342,12324,35255,31231,43534,65756,32425,57567,24234,54546,43425,21313,43242,54353,54563,23443],
    6:[12324,54353,12424,34242,53252,21313,43242,42345,42342,43535,12313,41342,12324,35255,31231,43534,65756,32425,57567,24234],
    5:[32423,43425,21313,43242,54353,54563,23443,42342,65465,76768,87686,34244,54353,65767,12323,43534,65756,32425,57567,24234],
    4:[65654,32435,43534,65756,32425,57567,24234,54546,43425,21313,43242,54353,54563,23443,42342,65465,76768,87686,34244,54353],
    3:[35345,65465,76768,87686,34244,54353,65767,12323,54353,12424,34242,53252,21313,43242,42345,42342,43535,12313,41342,12324],
    2:[34223,54546,76576,87687,32131,35345,56765,21313,43425,21313,43242,54353,54563,23443,42342,65465,76768,87686,34244,54353],
    1:[43444,23112,34534,65465,21312,45356,21313,45355,65465,76768,87686,34244,54353,65767,12323,43534,65756,32425,57567,24234]
});

dataMap.dataMZJjds = dataFormatter({
    12:[3],
    11:[5],
    10:[5],
    9:[2],
    8:[1],
    7:[3],
    6:[5],
    5:[5],
    4:[2],
    3:[1],
    2:[6],
    1:[3]
});
dataMap.dataFDJjds = dataFormatter({
    12:[4],
    11:[5],
    10:[2],
    9:[1],
    8:[6],
    7:[4],
    6:[5],
    5:[2],
    4:[1],
    3:[6],
    2:[3],
    1:[6]
});
dataMap.dataGAJjds = dataFormatter({
    12:[2],
    11:[3],
    10:[1],
    9:[4],
    8:[5],
    7:[2],
    6:[3],
    5:[1],
    4:[4],
    3:[5],
    2:[6],
    1:[7]
});
dataMap.dataGSJjds = dataFormatter({
    12:[2],
    11:[3],
    10:[1],
    9:[4],
    8:[5],
    7:[1],
    6:[3],
    5:[4],
    4:[5],
    3:[4],
    2:[1],
    1:[2]
});
dataMap.dataJYJjds = dataFormatter({
    12:[2],
    11:[1],
    10:[5],
    9:[4],
    8:[1],
    7:[2],
    6:[1],
    5:[5],
    4:[4],
    3:[1],
    2:[5],
    1:[6]
});
dataMap.dataSWJjds = dataFormatter({
    12:[4],
    11:[2],
    10:[5],
    9:[4],
    8:[3],
    7:[4],
    6:[2],
    5:[5],
    4:[4],
    3:[3],
    2:[1],
    1:[6]
});
dataMap.dataSJJjds = dataFormatter({
    12:[4],
    11:[1],
    10:[6],
    9:[5],
    8:[4],
    7:[4],
    6:[1],
    5:[6],
    4:[5],
    3:[4],
    2:[1],
    1:[2]
});
dataMap.dataZJJjds = dataFormatter({
    12:[4],
    11:[1],
    10:[2],
    9:[3],
    8:[1],
    7:[4],
    6:[1],
    5:[2],
    4:[3],
    3:[1],
    2:[1],
    1:[7]
});

option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2000,
            // controlStyle: {
            //     position: 'left'
            // },
             data: [ '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            label: {
                // value 对应上面data的value
               formatter: '{value}'
                }
            },

            // 显示柱形图的各项的数值
            label:{
                normal:{
                show: false,
                position: 'outside'}
            },
        // title: {
        //     subtext: '数据来自后台数据库'
        // },
        // 显示柱形提示条
        tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
        // 显示发送量和接收量的选项位置
        legend: {
            x: '70%',
            data: [ '发送量','接收量'],
            selected: { '发送量': true,'接收量':true,'节点数':false }
        },
        calculable : true,
        grid: {
            top: 110,
            bottom: 100
        },

        // X轴
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0,rotate:45},
                'name':'部门名称',

                 'data':[
                    '民政局','房地局','公安局','工商局','教育局','税务局','审计局','质检局','地税局','民防办','司法局','绿容局','粮食局','财政局','体育局','科委','国土资源局','新闻出版局','监狱管理局','生产监督管理局'],
                splitLine: {show: false}
            }
        ],

        // Y轴
        yAxis: [
            {
                type: 'value',
                name: '交换量/条',
                // 不定死y值，这样会自动识别最大值，从而选择出适合的y轴范围
                // max: 100000
            }
        ],
        series: [
            {name: '发送量', type: 'bar' },
            {name: '接收量', type: 'bar' },

            {
                name: '节点数',
                type: 'pie',
                center: ['88%', '25%'],
                radius: '28%'
            }
        ]
    },
    options: [
        {
            title: {text: '一月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['1sum']+'条'+'  总接收量：'+dataMap.dataJSL['1sum']+'条'},
            series: [
                {data: dataMap.dataFSL['1'],
                // 显示最大值标记点
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                    ],
                    symbolSize:65
                },
                markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
                }
                },
                {data: dataMap.dataJSL['1'],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                    ],
                    symbolSize:65
                },
                markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
                }
            },
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['1sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['1sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['1sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['1sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['1sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['1sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['1sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['1sum']},
                ]}
            ]
        },
        {
            title : {text: '二月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['2sum']+'条'+'  总接收量：'+dataMap.dataJSL['2sum']+'条'},
            series : [
                {data: dataMap.dataFSL['2']},
                {data: dataMap.dataJSL['2']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['2sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['2sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['2sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['2sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['2sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['2sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['2sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['2sum']},
                ]}
            ]
        },
        {
            title : {text: '三月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['3sum']+'条'+'  总接收量：'+dataMap.dataJSL['3sum']+'条'},
            series : [
                {data: dataMap.dataFSL['3']},
                {data: dataMap.dataJSL['3']},

                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['3sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['3sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['3sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['3sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['3sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['3sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['3sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['3sum']},
                ]}
            ]
        },
        {
            title : {text: '四月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['4sum']+'条'+'  总接收量：'+dataMap.dataJSL['4sum']+'条'},
            series : [
                {data: dataMap.dataFSL['4']},
                {data: dataMap.dataJSL['4']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['4sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['4sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['4sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['4sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['4sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['4sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['4sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['4sum']},
                ]}
            ]
        },
        {
            title : {text: '五月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['5sum']+'条'+'  总接收量：'+dataMap.dataJSL['5sum']+'条'},
            series : [
                {data: dataMap.dataFSL['5']},
                {data: dataMap.dataJSL['5']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['5sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['5sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['5sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['5sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['5sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['5sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['5sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['5sum']},
                ]}
            ]
        },
        {
            title : {text: '六月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['6sum']+'条'+'  总接收量：'+dataMap.dataJSL['6sum']+'条'},
            series : [
                {data: dataMap.dataFSL['6']},
                {data: dataMap.dataJSL['6']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['6sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['6sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['6sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['6sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['6sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['6sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['6sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['6sum']},
                ]}
            ]
        },
        {
            title : {text: '七月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['7sum']+'条'+'  总接收量：'+dataMap.dataJSL['7sum']+'条'},
            series : [
                {data: dataMap.dataFSL['7']},
                {data: dataMap.dataJSL['7']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['7sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['7sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['7sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['7sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['7sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['7sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['7sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['7sum']},
                ]}
            ]
        },
        {
            title : {text: '八月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['8sum']+'条'+'  总接收量：'+dataMap.dataJSL['8sum']+'条'},
            series : [
                {data: dataMap.dataFSL['8']},
                {data: dataMap.dataJSL['8']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['8sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['8sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['8sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['8sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['8sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['8sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['8sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['8sum']},
                ]}
            ]
        },
        {
            title : {text: '九月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['9sum']+'条'+'  总接收量：'+dataMap.dataJSL['9sum']+'条'},
            series : [
                {data: dataMap.dataFSL['9']},
                {data: dataMap.dataJSL['9']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['9sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['9sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['9sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['9sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['9sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['9sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['9sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['9sum']},
                ]}
            ]
        },
        {
            title : {text: '十月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['10sum']+'条'+'  总接收量：'+dataMap.dataJSL['10sum']+'条'},
            series : [
                {data: dataMap.dataFSL['10']},
                {data: dataMap.dataJSL['10']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['10sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['10sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['10sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['10sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['10sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['10sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['10sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['10sum']},
                ]}
            ]
        },
        {
            title : {text: '十一月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['11sum']+'条'+'  总接收量：'+dataMap.dataJSL['11sum']+'条'},
            series : [
                {data: dataMap.dataFSL['11']},
                {data: dataMap.dataJSL['11']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['11sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['11sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['11sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['11sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['11sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['11sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['11sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['11sum']},
                ]}
            ]
        },
        {
            title : {text: '十二月各部门交换状态'+'\n\n总发送量：'+dataMap.dataFSL['12sum']+'条'+'  总接收量：'+dataMap.dataJSL['12sum']+'条'},
            series : [
                {data: dataMap.dataFSL['12']},
                {data: dataMap.dataJSL['12']},
                {data: [
                    {name:'民政局',value:dataMap.dataMZJjds['12sum']},
                    {name:'房地局',value:dataMap.dataFDJjds['12sum']},
                    {name:'公安局',value:dataMap.dataGAJjds['12sum']},
                    {name:'工商局',value:dataMap.dataGSJjds['12sum']},
                    {name:'教育局',value:dataMap.dataJYJjds['12sum']},
                    {name:'税务局',value:dataMap.dataSWJjds['12sum']},
                    {name:'审计局',value:dataMap.dataSJJjds['12sum']},
                    {name:'质检局',value:dataMap.dataZJJjds['12sum']},
                ]}
            ]
        },
    ]
};

        // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
     };