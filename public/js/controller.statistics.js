'use strict';

/* Controllers */
angular.module('savingisfun.controller.statistics', [])
.controller('statisticsController', function ($scope) {
   console.log("statistics");
   
        $('#savings_friends_barchart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Your savings comparison'
            },
            subtitle: {
                text: 'Source: savingisfun'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Goal (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'You',
                data: [49.9, 71.5, 100.0, 29.2, 44.0, 76.0, 35.6, 48.5, 16.4, 94.1, 95.6, 54.4]

            }, {
                name: 'Friends (Avg)',
                data: [83.6, 78.8, 98.5, 93.4, 6.0, 84.5, 5.0, 4.3, 91.2, 83.5, 6.6, 92.3]

            }, {
                name: 'World (Avg)',
                data: [73.6, 48.8, 18.5, 33.4, 76.0, 24.5, 95.0, 64.3, 71.2, 53.5, 16.6, 82.3]

            }
            ]
        });
        
        
         $('#savings_performance_chart').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Savings vs Source'
            },
            subtitle: {
                text: 'Source: savingisfun'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Dollars'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
                 {
                name: 'Source',
                data: [10000,10000,10000,9000,10000,11000,8000,10000,9000,11000,12000,12000]},
                {
                name: 'Savings',
                data: [1000,500,250,2000,2000, 100, 500, 0, 300, 200, 0, 100]}
            ]
        });
        
         $('#savings_activity_chart').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Your annual activity'
            },
            subtitle: {
                text: 'Source: savingisfun'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Activity'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Deposits',
                data: [11,5,4, 2, 6, 8, 2, 5, 1, 3,0, 4]},
                {
                name: 'Goals Set',
                data: [0,2,1,0,3,0,0,0,1,3,0,4]},
                 {
                name: 'Goals Reached',
                data: [0,1,1,0,2,0,0,0,1,2,0,1]},
            ]
        });
        
        
         $('#savings_scatter_chart').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Average Annual Savings Performance by Age'
        },
        subtitle: {
            text: 'Source: savingisfun'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Age'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Savings ($)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'You',
            color: 'rgba(223, 83, 83, .5)',
            data: [[33, 2700]]

        }, {
            name: 'World',
            color: 'rgba(119, 152, 191, .5)',
            data: [ [18, 100],
                    [19, 200],
                    [20, 100],
                    [21, 500],
                    [22, 600],
                    [23, 50],
                    [24, 400],
                    [25, 250],
                    [26, 1000],
                    [27, 1100],
                    [28, 1030],
                    [29, 2050],
                    [30, 3000],
                    [31, 3500],
                    [32, 3200],
                    [33, 3300],
                    [34, 2800],
                    [35, 3000],
                    [36, 3500],
                    [37, 3600],
                    [38, 3650],
                    [39, 3800],
                    [40, 4100],
                    [41, 4500],
                    [42, 4000],
                    [43, 4200],
                    [44, 3900],
                    [45, 4800],
                    [46, 4500],
                    [47, 5900],
                    [48, 5100],
                    [49, 4100],
                    [50, 3010],
                    [51, 1320],
                    [52, 4910],
                    [53, 4310],
                    [54, 3120],
                    [55, 2310],
                    [56, 3250],
                    [57, 2500],
                    [58, 2300],
                    [59, 4500],
                    [60, 5000],
                    [61, 5600],
                    [62, 5500],
                    [63, 4400],
                    [64, 3200],
                    [65, 600],
                    [66, 3400],
                    [67, 1200],
                    [68, 200],
                    [69, 1500],
                    [70, 1000],
                    [71, 1000],
                    [72, 500]]
        }]
    });
   
});