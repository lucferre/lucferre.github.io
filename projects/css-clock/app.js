const colors = ['#E60001', '#55f200', '#ff4100', '#f5ff00', '#21fff8', '#f441ff'];
const root = document.documentElement;
var currentColor = 0;

document.querySelector(".snooze-button-group").addEventListener("click", () => {
    if (currentColor === colors.length - 1) {
        currentColor = 0;
    } else {
        currentColor++;
    }
    
  root.style.setProperty('--color-characters-on', colors[currentColor])
});

(function () {
  var hours, minutes;

  setInterval(function () {
    var today = new Date();
    if (today.getHours() >= 0 && today.getHours() < 10) {
      hours = today.getHours();
      hours = "0" + hours;
    } else {
      hours = today.getHours();
    }

    if (today.getMinutes() >= 0 && today.getMinutes() < 10) {
      minutes = today.getMinutes();
      minutes = "0" + minutes;
    } else {
      minutes = today.getMinutes();
    }
  }, 1000);

  setInterval(function () {
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    if (hours >= 0 && hours < 12) {
      document.querySelector(".am").classList.add("secondary-on");
      document.querySelector(".pm").classList.remove("secondary-on");
    } else {
      document.querySelector(".pm").classList.add("secondary-on");
      document.querySelector(".am").classList.remove("secondary-on");
    }
  }, 1000);
})();
