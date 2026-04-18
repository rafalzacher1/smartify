var labels = [
  "OOP-I"
];

var data = [95, 99, 60, 91, 36, 95, 40, 95, 95];

var ctx = document.getElementById("tests");
var data = {
  labels: labels,
  datasets: [
    {
      defaultFontColor: "red",
      backgroundColor: "rgba(32, 80, 251, .4)",
      borderColor: "#2050FB",
      pointBackgroundColor: "#2050FB",
      pointBorderColor: "#2050FB",
      lineTension: 0,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: data,
    },
  ],
};
var myRadarChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: {
    legend: { display: false },
    responsive: true,
    scale: {
      reverse: false,
      pointLabels: {
        fontColor: "#2050FB",
        fontSize: 16,
        fontFamily: "Baloo Bhai",
      },
      ticks: {
        // defaultFontSize: true
      },
    },
  },
});
