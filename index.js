// var countDownDate = new Date("October 31, 2024 00:00:00").getTime();
// var x = setInterval(() => {
  // calcDate(x)
// }, 1000);

// const calcDate = (interval) => {
//   var now = new Date().getTime();
//   var distance = new Date(countDownDate - now);

//   var days = distance.getDate().toString().padStart(2, "0")
//   var hours = distance.getHours().toString().padStart(2, "0")
//   var minutes = distance.getMinutes().toString().padStart(2, "0")
//   var seconds = distance.getSeconds().toString().padStart(2, "0")

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

//   if (distance < 0) {
//     clearInterval(interval)
//     document.getElementById("days").innerHTML = "00";
//     document.getElementById("hours").innerHTML = "00";
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
//   }
// }
// calcDate()


var x = setInterval(() => {
  calculateTime(x)
}, 1000);


function calculateTime(callback) {
  var currentDate = new Date();
  var targetDate = new Date("November 30, 2023");

  var timeDiff = targetDate.getTime() - currentDate.getTime();
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000).toString().padStart(2, "0");

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeDiff < 0) {
    clearInterval(interval)
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }

  // callback(days, hours, minutes, seconds);
}

// calculateTime(function (days, hours, minutes, seconds) {
//   console.log(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
// });
