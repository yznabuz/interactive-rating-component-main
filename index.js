function getSelectedRadioValue() {
  var radioButtons = document.getElementsByClassName("rad");
  for (let radioButton of radioButtons) {
    if (radioButton.checked === true) {
      var val = radioButton.value;
      localStorage.setItem("rate", val);
    }
    console.log(val);
  }
}

function readRate() {
  var rateNum = localStorage.getItem("rate");
  // console.log(rateNum);
  document.getElementById("choose").innerHTML = rateNum;
}
window.onload = readRate();
