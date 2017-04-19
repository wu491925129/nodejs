/*
 * @Author: wulong
 * @Date:   2017-03-13 10:22:05
 * @Last Modified by:   wulong
 * @Last Modified time: 2017-03-28 09:13:49
 */
var myApp = angular.module('myApp', [])
    .controller('pushMsgController',function($scope,$http){
        $http({
            url:'http://localhost:3000/json',
            method:'GET'
        }).success(function(data,header,config,status){
        //响应成功
            $scope.message = data;
            console.log(data)
        }).error(function(data,header,config,status){
        //处理响应失败
        });
        // $scope.message=['民政局调用根据身份证查询人员信息服务超过1级预警标准','xml解析入法人库的交换作业执行成功，共交换数据226条','用户qianlisi 成功登陆系统','公安局调用了根据身份证信息查询人员信息的服务'];
    })
    .controller('dataInfoController',function($scope){
        $scope.dataInfo = [786000,18,40,98,28000];
    })
    .controller('marqueeController',function($scope){
        $scope.marqueeList = [];
    })
    // 红：#d15b47  绿：#87b87f 黄：#ffb752
    .controller('listController', function($scope) {
        $scope.list = {
            bmData: [
                {
                    dwmc: '数据中心',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger',
                        istyle:'glyphicon glyphicon-remove'
                    }, {
                        jdName: '法人登记信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#ffb752',
                        bgColor: 'alert-warning',
                        istyle:'glyphicon glyphicon-exclamation-sign'
                    }, {
                        jdName: '法人处罚关联信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }, {
                        jdName: '人户分离请况',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }, {
                        jdName: '法人资质信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }, {
                        jdName: '人户分离请况',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }, {
                        jdName: '人户分离请况',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success',
                        istyle:'glyphicon glyphicon-ok'
                    }]
                },
                {
                    dwmc: '民政局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '房地局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '公安局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '工商局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '教育局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '税务局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '审计局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '质检局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '地税局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '民防办',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '司法局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '绿容局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '粮食局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '财政局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                },
                {
                    dwmc: '体育局',
                    data: [{
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#d15b47',
                        bgColor: 'alert-danger'
                    }, {
                        jdName: '法人基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '房屋基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }, {
                        jdName: '人员基本信息',
                        jdInfo: 'XXXXXXXXXXXXX',
                        jdTime: '2016-12-11',
                        color: '#87b87f',
                        bgColor: 'alert-success'
                    }]
                }
            ]  // end of bmData
        }
    });
