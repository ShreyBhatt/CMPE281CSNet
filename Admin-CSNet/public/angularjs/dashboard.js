/**
 * Created by vedant on 11/26/16.
 */
var dashboard = angular.module('dashboardapp',['nvd3']);
dashboard.controller('dashboard', function($scope, $http){



    $scope.topTenProperties = function(){

        $http({
            method:'get',
            url:'/topTenProperties'

        }).success(function(result){
            console.log("Getting top ten properties"+ result[0]);
            $scope.topTenProperties = result;


            Highcharts.chart('container', {

                title: {
                    text: 'Top 10 Services with usage'
                },

                xAxis: {
                    title: {
                        text:'Services'
                    },
                   //categories: ["33 South", "101 San Fernando", "Pascio Plaza", "355 Serrano Drive", "Casa Baloni", "The Weekend", "Holiday Inn", "Radisson Blu", "Legacy Fountain"]
                     categories: ["Printing", "Lab Access", "Library", "PC Access", "Projector Access", "IEEE Subscription", "International Student Service", "Practical Service", "Dining Service", "Learning Material Service"]
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [48, 24, 63, 20, 52, 76, 13, 62, 45, 32],
                    showInLegend: false
                }]

            }
            );

        }).error(function(error) {
            console.log("error");
        })
    }


    $scope.cityRevenue = function() {

        $http({
            method: 'get',
            url: '/cityRevenue'

        }).success(function (result) {
            console.log("Getting top ten cities");
            $scope.cityRevenue = result;
            console.log($scope.cityRevenue);
            // Highcharts.chart('container1', {
            //     chart: {
            //         type: 'column',
            //         options3d: {
            //             enabled: true,
            //             alpha: 10,
            //             beta: 25,
            //             depth: 70
            //         }
            //     },
            //     title: {
            //         text: 'Top 10 cities with their revenue'
            //     },
            //     plotOptions: {
            //         column: {
            //             depth: 25
            //         }
            //     },
            //     xAxis: {
            //         title: {
            //             text:'City name'
            //         },
            //         categories: [result[0]._id, result[1]._id, result[2]._id, result[3]._id, result[4]._id, result[5]._id, result[6]._id]
            //     },
            //     yAxis: {
            //         title: {
            //             text:'Revenue'
            //         }
            //     },
            //     series: [{
            //         name: 'Top 10 Cities',
            //         colorByPoint: true,
            //         data: [result[0].revenue, result[1].revenue, result[2].revenue, result[3].revenue, result[4].revenue, result[5].revenue, result[6].revenue],
            //     }]
            // }

            Highcharts.chart('container1', {

                    title: {
                        text: 'Top 10 nodes with their services'
                    },

                    xAxis: {
                        title: {
                            text:'Nodes'
                        },
                        categories: ["Node Lib41", "Node Lab126", "Node Lib12", "Node CMPE32", "Node EE82", "Node SU8", "Node SE55", "Node CS39", "Node Lib81", "Node SE69"]
                        //, result[1]._id , result[2]._id, result[3]._id, result[4]._id, result[5]._id, result[6]._id, result[7]._id, result[8]._id, result[9]._id
                    },

                    series: [{
                        type: 'column',
                        colorByPoint: true,
                        data: [22,
                            67,
                            18,
                            85,
                            83,
                            94,
                            52,
                            31,
                            93,
                            58],
                        showInLegend: false
                     // , result[1].revenue , result[2].revenue,result[3].revenue  , result[4].revenue, result[5].revenue, result[6].revenue, result[7].revenue, result[8].revenue, result[9].revenue
                    }]

                }

            );

        })
    }


    $scope.topTenHost = function(){

        $http({
            method:'get',
            url:'/topTenHost'

        }).success(function(result){
            console.log("Getting top ten hosts");
            $scope.topTenHost = result;
console.log($scope.topTenHost);




            Highcharts.chart('container2', {

                title: {
                    text: 'Cluster Activity'
                },

                xAxis: {
                    title: {
                        text:'Clusters'
                    },
                    categories: ["Library", "Software Engineering", "Aerospace Engineering", "Nuclear Engineering,", "Student Union"]
                    //categories: ["Adrian Brady", "Juan Pinzon", "Rakesh Shah", "Xiaoyu Zhou", "Chris Pratt", "Juliann Moore", "Steve Austin", "Salmaan Pelhari", "Stacy Roberts"]
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [15,
                        7,
                        40,
                        71,
                        92],
                  //  data: [2334, 5434, 2123, 1232, 10394, 3942, 5678, 11234, 4530],
                    showInLegend: false
                }]

            });

        }).error(function(error) {
            console.log("error");
        })
    }



$scope.totalUsers = function(){
console.log("Call is coming here");
    $http({
        method:'get',
        url:'/totalUsers'
    }).success(function(data){
            console.log("Getting total users" + data);
            $scope.users=data;
    });
}

    $scope.totalHosts = function(){
        console.log("Call is coming here");
        $http({
            method:'get',
            url:'/totalHosts'
        }).success(function(data){
            $scope.hosts=data;
        });
    }


    $scope.totalProperties = function(){
        console.log("Call is coming here");
        $http({
            method:'get',
            url:'/totalProperties'
        }).success(function(data){
            $scope.properties=data;
        });
    }

$scope.totalBills = function(){
        $http({
            method:'get',
            url:'/totalBills'
        }).success(function(data){
            $scope.bills=data;
            }
        )
}

    $scope.totalRevenue = function(){
        console.log("Call is coming here");
        $http({
            method:'get',
            url:'/totalRevenue'
        }).success(function(data){
            $scope.revenue=data;
        });
    }
});