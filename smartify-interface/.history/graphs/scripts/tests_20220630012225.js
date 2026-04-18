// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

// var testsData = {
//   labels: xValues,
//   datasets: [
//     {
//       backgroundColor: barColors,
//       data: yValues,
//     },
//   ],
// };

// var testsOption = {
//   responsive: true,
//   scale: {
//     reverse: false,
//     pointLabels: {
//       fontColor: "#2050FB",
//       fontSize: 26,
//       fontFamily: "Baloo Bhai",
//     },
//     ticks: {
//       // defaultFontSize: true
//     },
//   },
// };

// var ctx = document.getElementById("tests").getContext("2d");
// var LearningHoursChar = new Chart(ctx, {
//   type: "doughnut", // Define chart type
//   data: testsData, // Chart data
//   options: testsOption, // Chart Options [This is optional paramenter use to add some extra things in the chart].
// });


var ctx = document.getElementById("myChart");
    var data = {
    labels: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Gulp", "PHP", 'SQL', 'Git'],
    datasets: [
        {
            defaultFontColor: 'red',
            backgroundColor: "rgba(0,255,255,.4)",
            borderColor: "rgba(0,255,255,.4)",
            pointBackgroundColor: "red",
            pointBorderColor: "#fff",
            lineTension: 0,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [95, 99, 60, 91, 36, 95, 40, 95, 95]
            }
        ]
    };
    var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        scale: {
            reverse: false,
 						pointLabels :{
               fontStyle: "bold",
            },
            ticks: {
                // defaultFontSize: true
            }
        
          
        }
      }
    });