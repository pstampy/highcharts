$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "no-te-830",
            "value": 0
        },
        {
            "hc-key": "no-te-827",
            "value": 1
        },
        {
            "hc-key": "no-te-814",
            "value": 2
        },
        {
            "hc-key": "no-te-815",
            "value": 3
        },
        {
            "hc-key": "no-te-817",
            "value": 4
        },
        {
            "hc-key": "no-te-831",
            "value": 5
        },
        {
            "hc-key": "no-te-807",
            "value": 6
        },
        {
            "hc-key": "no-te-821",
            "value": 7
        },
        {
            "hc-key": "no-te-805",
            "value": 8
        },
        {
            "hc-key": "no-te-834",
            "value": 9
        },
        {
            "hc-key": "no-te-811",
            "value": 10
        },
        {
            "hc-key": "no-te-829",
            "value": 11
        },
        {
            "hc-key": "no-te-828",
            "value": 12
        },
        {
            "hc-key": "no-te-826",
            "value": 13
        },
        {
            "hc-key": "no-te-822",
            "value": 14
        },
        {
            "hc-key": "no-te-819",
            "value": 15
        },
        {
            "hc-key": "no-te-806",
            "value": 16
        },
        {
            "hc-key": "no-te-833",
            "value": 17
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/no/no-te-all.js">Telemark</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/no/no-te-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
