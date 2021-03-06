$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "es-pm",
            "value": 0
        },
        {
            "hc-key": "es-va",
            "value": 1
        },
        {
            "hc-key": "es-me",
            "value": 2
        },
        {
            "hc-key": "es-p",
            "value": 3
        },
        {
            "hc-key": "es-s",
            "value": 4
        },
        {
            "hc-key": "es-na",
            "value": 5
        },
        {
            "hc-key": "es-ce",
            "value": 6
        },
        {
            "hc-key": "es-cr",
            "value": 7
        },
        {
            "hc-key": "es-ba",
            "value": 8
        },
        {
            "hc-key": "es-cu",
            "value": 9
        },
        {
            "hc-key": "es-co",
            "value": 10
        },
        {
            "hc-key": "es-gr",
            "value": 11
        },
        {
            "hc-key": "es-mu",
            "value": 12
        },
        {
            "hc-key": "es-sa",
            "value": 13
        },
        {
            "hc-key": "es-vi",
            "value": 14
        },
        {
            "hc-key": "es-ss",
            "value": 15
        },
        {
            "hc-key": "es-le",
            "value": 16
        },
        {
            "hc-key": "es-za",
            "value": 17
        },
        {
            "hc-key": "es-m",
            "value": 18
        },
        {
            "hc-key": "es-ma",
            "value": 19
        },
        {
            "hc-key": "es-gu",
            "value": 20
        },
        {
            "hc-key": "es-sg",
            "value": 21
        },
        {
            "hc-key": "es-se",
            "value": 22
        },
        {
            "hc-key": "es-te",
            "value": 23
        },
        {
            "hc-key": "es-to",
            "value": 24
        },
        {
            "hc-key": "es-v",
            "value": 25
        },
        {
            "hc-key": "es-bu",
            "value": 26
        },
        {
            "hc-key": "es-bi",
            "value": 27
        },
        {
            "hc-key": "es-or",
            "value": 28
        },
        {
            "hc-key": "es-l",
            "value": 29
        },
        {
            "hc-key": "es-z",
            "value": 30
        },
        {
            "hc-key": "es-t",
            "value": 31
        },
        {
            "hc-key": "es-lo",
            "value": 32
        },
        {
            "hc-key": "es-gi",
            "value": 33
        },
        {
            "hc-key": "es-ab",
            "value": 34
        },
        {
            "hc-key": "es-a",
            "value": 35
        },
        {
            "hc-key": "es-av",
            "value": 36
        },
        {
            "hc-key": "es-cc",
            "value": 37
        },
        {
            "hc-key": "es-h",
            "value": 38
        },
        {
            "hc-key": "es-hu",
            "value": 39
        },
        {
            "hc-key": "es-c",
            "value": 40
        },
        {
            "hc-key": "es-po",
            "value": 41
        },
        {
            "hc-key": "es-al",
            "value": 42
        },
        {
            "hc-key": "es-b",
            "value": 43
        },
        {
            "hc-key": "es-ca",
            "value": 44
        },
        {
            "hc-key": "es-o",
            "value": 45
        },
        {
            "hc-key": "es-cs",
            "value": 46
        },
        {
            "hc-key": "es-j",
            "value": 47
        },
        {
            "hc-key": "es-so",
            "value": 48
        },
        {
            "hc-key": "es-lu",
            "value": 49
        },
        {
            "hc-key": "es-tf",
            "value": 50
        },
        {
            "hc-key": "es-gc",
            "value": 51
        },
        {
            "value": 52
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/es/es-all.js">Spain</a>'
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
            mapData: Highcharts.maps['countries/es/es-all'],
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
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/es/es-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
