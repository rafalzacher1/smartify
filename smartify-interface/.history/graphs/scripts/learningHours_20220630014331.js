if (document.getElementById("graphs").value) == "week"
var dt = new Date();
var month = dt.getMonth();
var year = dt.getFullYear();
console.log(new Date(year, month+1, 0).getDate());

// Data define for bar chart
var learningData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        fill: false,
        borderColor: "#2050FB",
        data: [0, 1.5, 2.5, 1, 4, 3, 4]
    }]
};
// Options to display value on top of bars
var learningOption = {
    legend: { display: false },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: "#2050FB",
                fontSize: 16,
                fontFamily: "Baloo Bhai",
                stepSize: 1,
                beginAtZero: true
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: "#2050FB",
                fontSize: 16,
                fontFamily: "Baloo Bhai",
                stepSize: 1,
                beginAtZero: true
            }
        }]
    },
    tooltips: {
        enabled: true
    },
    hover: {
        animationDuration: 0.1
    },
    animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.fillStyle = "#2050FB";
            ctx.textBaseline = 'bottom';
            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    // console.log(dataset.data[index]);
                    // dataset.data[index] = dataset.data[index]+"H";
                    // console.log(dataset.data[index]);
                });
            });
        }
    }
};

//Code to drow Chart
var ctx = document.getElementById('learning-hours').getContext('2d');
var LearningHoursChar = new Chart(ctx, {
    type: 'line',    	// Define chart type
    data: learningData,    	// Chart data
    options: learningOption 	// Chart Options [This is optional paramenter use to add some extra things in the chart].
});