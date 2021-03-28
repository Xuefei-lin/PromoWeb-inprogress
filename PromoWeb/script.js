google.charts.load('current', {
    'packages': ['bar']
});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
          ['Move', 'Billion USD'],
          ["2020", 162.32],
          ["2026", 295.63],
        ]);

    var options = {
        width: 750,
        height:500,
        legend: {
            position: 'absolute'
        },
        //the chart background
        'backgroundColor': {
            'fill': '#161616',
            'opacity': 0.4
        },
        //chart area
        chartArea: {
            backgroundColor: {
                fill: '#161616',
                fillOpacity: 0.4
            },
        },
        axes: {
            x: {
                0: {
                    side: 'top',
                    label: ''
                } // Top x-axis.
            }
        },
        bar: {
            groupWidth: "90%"
        },

    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};