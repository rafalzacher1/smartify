var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [55, 49, 44, 24, 15];

var testsData = {
  labels: ["Italy", "France", "Spain", "USA", "Argentina"],
  datasets: [
    {
      backgroundColor: barColors,
      data: [55, 49, 44, 24, 15],
    },
  ],
};

var testsOption = {
  title: {
    display: true,
    text: "World Wide Wine Production 2018",
  },
};

var ctx = document.getElementById("tests").getContext("2d");
var LearningHoursChar = new Chart(ctx, {
  type: "doughnut", // Define chart type
  data: testsData, // Chart data
  options: testsOption, // Chart Options [This is optional paramenter use to add some extra things in the chart].
});
