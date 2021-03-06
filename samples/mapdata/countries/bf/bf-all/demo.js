$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "bf-bk",
            "value": 0
        },
        {
            "hc-key": "bf-kw",
            "value": 1
        },
        {
            "hc-key": "bf-bz",
            "value": 2
        },
        {
            "hc-key": "bf-ka",
            "value": 3
        },
        {
            "hc-key": "bf-ob",
            "value": 4
        },
        {
            "hc-key": "bf-pa",
            "value": 5
        },
        {
            "hc-key": "bf-zm",
            "value": 6
        },
        {
            "hc-key": "bf-sg",
            "value": 7
        },
        {
            "hc-key": "bf-ss",
            "value": 8
        },
        {
            "hc-key": "bf-zr",
            "value": 9
        },
        {
            "hc-key": "bf-lo",
            "value": 10
        },
        {
            "hc-key": "bf-yt",
            "value": 11
        },
        {
            "hc-key": "bf-nm",
            "value": 12
        },
        {
            "hc-key": "bf-st",
            "value": 13
        },
        {
            "hc-key": "bf-bl",
            "value": 14
        },
        {
            "hc-key": "bf-kl",
            "value": 15
        },
        {
            "hc-key": "bf-gz",
            "value": 16
        },
        {
            "hc-key": "bf-kr",
            "value": 17
        },
        {
            "hc-key": "bf-nr",
            "value": 18
        },
        {
            "hc-key": "bf-zw",
            "value": 19
        },
        {
            "hc-key": "bf-io",
            "value": 20
        },
        {
            "hc-key": "bf-bb",
            "value": 21
        },
        {
            "hc-key": "bf-tu",
            "value": 22
        },
        {
            "hc-key": "bf-le",
            "value": 23
        },
        {
            "hc-key": "bf-km",
            "value": 24
        },
        {
            "hc-key": "bf-po",
            "value": 25
        },
        {
            "hc-key": "bf-gg",
            "value": 26
        },
        {
            "hc-key": "bf-kj",
            "value": 27
        },
        {
            "hc-key": "bf-se",
            "value": 28
        },
        {
            "hc-key": "bf-yg",
            "value": 29
        },
        {
            "hc-key": "bf-ta",
            "value": 30
        },
        {
            "hc-key": "bf-7399",
            "value": 31
        },
        {
            "hc-key": "bf-kp",
            "value": 32
        },
        {
            "hc-key": "bf-gm",
            "value": 33
        },
        {
            "hc-key": "bf-ho",
            "value": 34
        },
        {
            "hc-key": "bf-kn",
            "value": 35
        },
        {
            "hc-key": "bf-bw",
            "value": 36
        },
        {
            "hc-key": "bf-ks",
            "value": 37
        },
        {
            "hc-key": "bf-ba",
            "value": 38
        },
        {
            "hc-key": "bf-mo",
            "value": 39
        },
        {
            "hc-key": "bf-od",
            "value": 40
        },
        {
            "hc-key": "bf-sm",
            "value": 41
        },
        {
            "hc-key": "bf-ny",
            "value": 42
        },
        {
            "hc-key": "bf-sr",
            "value": 43
        },
        {
            "hc-key": "bf-bm",
            "value": 44
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/bf/bf-all.js">Burkina Faso</a>'
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
            mapData: Highcharts.maps['countries/bf/bf-all'],
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
