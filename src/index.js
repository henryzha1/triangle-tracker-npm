import './css/styles.css';

function testing(num1,num2,num3) {
  let ans = "";
  let message = "";
  if (num1+num2<=num3 || num2+num3<=num1 || num1+num3<=num2){
      document.getElementById("ans").removeAttribute("class");
      ans = "NOT A TRIANGLE";
  } else if(num1 === num2 && num2 === num3) {
      document.getElementById("ans").removeAttribute("class");
      ans = "EQUILATERAL";
  } else if(num1 === num2 || num2 === num3 || num1 === num3) {
      document.getElementById("ans").removeAttribute("class");
      ans = "ISOSCELES";
  } else {
      document.getElementById("ans").removeAttribute("class");
      ans = "SCALENE";
  }
  message = "Side 1: " + num1 + " Side 2: " + num2 + " Side 3: " + num3 + " RESULT: " + ans;
  document.getElementById("ans").innerText = message;
  return message;
}

function calculate(e) {
  e.preventDefault();
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  return testing(num1,num2,num3);
}


window.addEventListener("load", function() {
  const history = [];
  document.querySelector("form").addEventListener("submit", function(e) {
      history.push(calculate(e));
  });
});