let secondsHand = document.querySelector(".seconds-hand");
let minutesHand = document.querySelector(".minutes-hand");
let hoursHand = document.querySelector(".hours-hand");
setInterval(setDate,1000);

function setDate(){
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  //console.log(seconds)
  secondsHand.style.transform = "rotate("+((seconds/60*360)+90)+"deg)";
  minutesHand.style.transform = "rotate("+((minutes/60*360)+90)+"deg)";
  hoursHand.style.transform = "rotate("+((hours/12*360)+90)+"deg)";
}