/*
* @Author: wulong
* @Date:   2017-02-13 16:56:39
* @Last Modified by:   wulong
* @Last Modified time: 2017-03-17 18:00:56
*/
function jdztCharts(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('jdzt-charts'));
    console.log(datas);
    infoJson = [
        ['数据中心',10,'老王','正常','192.168.1.1'],
        [datas[0].department_name,datas[0].department_id,4,'张三','正常','192.168.1.2'],
        [datas[1].department_name,datas[1].department_id,6,'李四','异常','192.168.1.3'],
        [datas[2].department_name,datas[2].department_id,2,'王五','正常','192.168.1.4'],
        [datas[3].department_name,datas[3].department_id,3,'赵六','异常','192.168.1.5'],
        [datas[4].department_name,datas[4].department_id,2,'钱七','正常','192.168.1.6'],
        [datas[5].department_name,datas[5].department_id,5,'王五','正常','192.168.1.7'],
        [datas[6].department_name,datas[6].department_id,3,'赵六','异常','192.168.1.8'],
        [datas[7].department_name,datas[7].department_id,2,'钱七','正常','192.168.1.9'],
        [datas[8].department_name,datas[8].department_id,4,'张三','正常','192.168.1.2'],
        [datas[9].department_name,datas[9].department_id,6,'李四','异常','192.168.1.3'],
        [datas[10].department_name,datas[10].department_id,2,'王五','正常','192.168.1.4'],
        [datas[11].department_name,datas[11].department_id,3,'赵六','异常','192.168.1.5'],
        [datas[12].department_name,datas[12].department_id,2,'钱七','正常','192.168.1.6'],
        [datas[13].department_name,datas[13].department_id,5,'王五','正常','192.168.1.7'],
        [datas[14].department_name,datas[14].department_id,3,'赵六','异常','192.168.1.8'],
        [datas[15].department_name,datas[15].department_id,2,'钱七','正常','192.168.1.9'],
        [datas[16].department_name,datas[16].department_id,2,'钱七','正常','192.168.1.6'],
        [datas[17].department_name,datas[17].department_id,5,'王五','正常','192.168.1.7'],
        [datas[18].department_name,datas[18].department_id,3,'赵六','异常','192.168.1.8'],
        [datas[19].department_name,datas[19].department_id,2,'钱七','正常','192.168.1.9'],
    ],

    option = {
        //气泡显示各控件的详情
        tooltip: {
        },

    animationDurationUpdate: 500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        // 正常画圈和画线
        {
        type: 'graph',
        layout: 'none',
        //圈圈大小
        symbolSize: 60,
        // symbol:'roundRect',
        roam: true, //鼠标滚动放大缩小效果
        center:['20%','20%'],
        // 连接线两端的大小和类型
        edgeSymbol : [ 'arrow', 'arrow' ],
        edgeSymbolSize : [ 5, 5 ],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 20
                }
            }
        },
        itemStyle:{
            normal:{
                color:'#87B87F'
                // color:'green'
            }
        },
        lineStyle: {
            normal: {
                opacity: 1,
                width: 2,
                // 线条弯曲度
                // curveness: 0.1
            }
        },
        // 圆圈内的文字
        label: {
            normal: {
                show: true,
                textStyle:{
                    fontSize:12
                }
            }
        },
        // 设置动画延迟
        animationDelay: function (idx) {
            return idx * 150;
        },
        // 设置动画的缓动效果
        animationEasing:'elasticOut',


        data: [
                {
                name: '数据中心',
                x: 550,
                y: 250,
                symbolSize: 100,
                value:infoJson[0][1]
                },

                {
                name: infoJson[1][0],
                x: 590,
                y: 140,
                value:infoJson[1][1],
                //自定义各个item的颜色
                itemStyle:{
                    normal:{
                        color:'#FFB752'
                        }
                    },
                },

                {
                name: infoJson[2][0],
                x: 650,
                y: 185,
                value:infoJson[2][1],
                },

                {
                name: '公安局',
                x: 670,
                y: 250,
                value:infoJson[3][1],
                },

                {
                name: infoJson[4][0],
                x: 650,
                y: 315,
                value:infoJson[4][1],
                itemStyle:{
                    normal:{
                        color:'#D15B47'
                        }
                    },
                },

                {
                name: infoJson[5][0],
                x: 590,
                y: 360,
                value:infoJson[5][1],
                },

                {
                name: infoJson[6][0],
                x: 510,
                y: 360,
                value:infoJson[6][1],
                },

                {
                name: infoJson[7][0],
                x: 450,
                y: 315,
                value:infoJson[7][1],
                },

                {
                name: infoJson[8][0],
                x: 430,
                y: 250,
                value:infoJson[8][1],
                },
                // --
                {
                name: infoJson[9][0],
                x: 450,
                y: 185,
                value:infoJson[9][1],
                },
                {
                name: infoJson[10][0],
                x: 510,
                y: 140,
                value:infoJson[10][1],
                },

                {
                name: infoJson[11][0],
                x: 680,
                y: 105,
                value:infoJson[11][1],
                },
                {
                name: infoJson[12][0],
                x: 740,
                y: 200,
                value:infoJson[12][1],
                },
                {
                name: infoJson[13][0],
                x: 740,
                y: 300,
                value:infoJson[13][1],
                },
                {
                name: infoJson[14][0],
                x: 680,
                y: 395,
                value:infoJson[14][1],
                },
                {
                name: infoJson[15][0],
                x: 550,
                y: 440,
                value:infoJson[15][1],
                itemStyle:{
                    normal:{
                        color:'#D15B47'
                        }
                    },
                },
                {
                name: infoJson[16][0],
                x: 420,
                y: 395,
                value:infoJson[16][1],
                },
                {
                name: infoJson[17][0],
                x: 360,
                y: 300,
                value:infoJson[17][1],
                },
                {
                name: infoJson[18][0],
                x: 360,
                y: 200,
                value:infoJson[18][1],
                itemStyle:{
                    normal:{
                        color:'#D15B47'
                        }
                    },
                },
                {
                name: infoJson[19][0],
                x: 420,
                y: 105,
                value:infoJson[19][1],
                },
                {
                name: infoJson[20][0],
                x: 550,
                y: 60,
                value:infoJson[20][1],
                }
            ],   // ---data end---

        // links: [],
        links: [
            {
            source: '数据中心',
            target: infoJson[1][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[2][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: '公安局',
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[4][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[5][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[6][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[7][0],
            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[8][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            // --
            {
            source: '数据中心',
            target: infoJson[9][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[10][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[11][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[12][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[13][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[14][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[15][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[16][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[17][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[18][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[19][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
            {
            source: '数据中心',
            target: infoJson[20][0],

            label : {
                    normal : {
                        show : false
                    }
                }
            },
        ] // --- links end---
    },

    ] // series end
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 处理点击事件并且跳转到相应的百度搜索页面
    myChart.on('click', function (params) {
        // window.open('../数据中心监控平台/jdzt.html');
        // console.log(params.name);
        // alert(params.name);
         // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.seriesName));
         console.log(params);
          if (params.componentType === 'markPoint') {
                if (params.seriesIndex === 5) {
                }
         }
         else if (params.componentType === 'series') {
                if (params.seriesType === 'graph') {
                    if (params.dataType === 'edge') {
                    }
                    else {
                        console.log("鼠标点到了节点 "+infoJson[params.dataIndex][1]+" 上");
                        // 获取点击的index通过infoJson来解析相应的名字
                        document.getElementById('jdName').innerHTML = infoJson[params.dataIndex][0]+"交换节点";
                        document.getElementById('test').innerHTML = '{{'+params.dataIndex+'}}';
                        $.post('/swap/getSwapNode',{index:infoJson[params.dataIndex][1]},function (data) {
                           console.log(data);
                        });
                    }
                 }
            }

});
}