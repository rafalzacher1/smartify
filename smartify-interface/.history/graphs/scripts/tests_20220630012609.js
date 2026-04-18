var labels = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "Gulp",
  "PHP",
  "SQL",
  "Git",
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
      pointBackgroundColor: "#000000",
      pointBorderColor: "#fff",
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
        fontStyle: "bold",
      },
      ticks: {
        // defaultFontSize: true
      },
    },
  },
});
