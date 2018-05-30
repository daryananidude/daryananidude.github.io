function youare() {
  var output = Math.round(BMI * 100) / 100;
  if (output < 18.5) {
    outcome.innerText = "Underweight";
  } else if (output >= 18.5 && output <= 25) {
    outcome.innerText = "Normal weight";
  } else if (output >= 25 && output <= 30) {
    outcome.innerText = "Overweight";
  } else if (output > 30) {
    outcome.innerText = "Obese";
  }
}

function tips(){
   var output = Math.round(BMI * 100) / 100;
  if (output < 18.5){
      tip.innertext = "Eat more food to maintain a healthy weight."
}   else if (output >= 18.5 && output <= 25){
      tip.innerText = "Great job maintain this weight and stay healthy"
}   else if (output >= 25 && output <= 30){
      tip.innerText = "Try to eat more healthy and try going to excersize"
}   else if (output > 30){
      tip.innerText = "Try to eat more healthy and try going to excersize"
}
}

function calcBMI() {
  var height = Number(document.getElementById("height").value);
  var weight = Number(document.getElementById("weight").value);
  var inch = document.getElementById("inch").value;
  var pound = document.getElementById("pound").value;
  if (inch == "inches") height /= 39.3700787;
  if (pound == "lb") weight /= 2.20462;
  BMI = weight / Math.pow(height, 2);
  output.innerText = Math.round(BMI * 100) / 100;
  youare();
  tips();
}

const outcome = document.getElementById("outcome");
const output = document.getElementById("output");
const tip = document.getElementById("tip");
var BMI = undefined;


function calcWeight() {
  var calories = Number(document.getElementById("calories").value);
  var gym = Number(document.getElementById("gym").value);
  var pound = document.getElementById("pound").value;
  var weight = Number(document.getElementById("weight").value);
  var goal = Number(document.getElementById("goal").value);
  if (pound == "lb") weight /= 2.20462;
  var weightDif = weight-goal
  var kgamount = weightDif*7700
  var weightLoss = kgamount/calories
  var weeks = weightLoss/gym
  weeksone.innerText = weeks;
}
