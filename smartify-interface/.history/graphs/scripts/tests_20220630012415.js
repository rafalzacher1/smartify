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

var data = 

var ctx = document.getElementById("tests");
var data = {
  labels: labels,
  datasets: [
    {
      defaultFontColor: "red",
      backgroundColor: "rgba(0,255,255,.4)",
      borderColor: "rgba(0,255,255,.4)",
      pointBackgroundColor: "red",
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
