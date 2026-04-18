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
  plugins: {
    datalabels: {
      display: true,
      align: "bottom",
      backgroundColor: "#ccc",
      borderRadius: 3,
      font: {
        size: 18,
      },
    },
  },
};

var ctx = document.getElementById("tests").getContext("2d");
var LearningHoursChar = new Chart(ctx, {
  //   type: "doughnut", // Define chart type
  //   data: testsData, // Chart data
  //   options: testsOption, // Chart Options [This is optional paramenter use to add some extra things in the chart].

  type: "doughnut",
  data: {
    datasets: [
      {
        data: [10, 20, 15, 5, 50],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  },
  options: {
    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + "%";
        },
      },
    },
  },
});
