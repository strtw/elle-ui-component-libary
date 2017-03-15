var d = new Date();
var timeIndicator = document.querySelector('.linearClock__timeIndicator')

function setTime(){
  timeIndicator.style.left = (d.getHours() * 25 + d.getMinutes()/60 * 25 + 8) + 'px';
}

setInterval(setTime, 1000)
