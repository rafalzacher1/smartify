var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("tests", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018",
    },
  },
});

var testsData = {

};

// var testsOption = {
//   title: {
//     display: true,
//     text: "World Wide Wine Production 2018",
//   },
// }

var ctx = document.getElementById("tests").getContext("2d");
var LearningHoursChar = new Chart(ctx, {
  type: "doughnut", // Define chart type
  data: testsData, // Chart data
  options: testsOption, // Chart Options [This is optional paramenter use to add some extra things in the chart].
});
