var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

var testsData = {
  labels: xValues,
  datasets: [
    {
      backgroundColor: barColors,
      data: yValues,
    },
  ],
};

var testsOption = {
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: "#2050FB",
          fontSize: 16,
          fontFamily: "Baloo Bhai",
          stepSize: 1,
          beginAtZero: true,
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: "#2050FB",
          fontSize: 16,
          fontFamily: "Baloo Bhai",
          stepSize: 1,
          beginAtZero: true,
        },
      },
    ],
  },
  tooltips: {
    enabled: true,
  },
  hover: {
    animationDuration: 1,
  },
  animation: {
    duration: 1,
    onComplete: function () {
      var chartInstance = this.chart,
        ctx = chartInstance.ctx;
      ctx.textAlign = "center";
      ctx.fillStyle = "#2050FB";
      ctx.textBaseline = "bottom";
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
    },
  },
};

var ctx = document.getElementById("tests").getContext("2d");
var LearningHoursChar = new Chart(ctx, {
  type: "doughnut", // Define chart type
  data: testsData, // Chart data
  options: testsOption, // Chart Options [This is optional paramenter use to add some extra things in the chart].
});
