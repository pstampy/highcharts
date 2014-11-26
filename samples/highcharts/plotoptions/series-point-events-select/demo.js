$(function () {
    // get the jQuery wrapper
    var $report = $('#report');

    // create the chart
    $('#container').highcharts({
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        select: function () {
                            $report.html(this.category + ': ' + this.y + ' was last selected');
                        }
                    }
                }
            }
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});