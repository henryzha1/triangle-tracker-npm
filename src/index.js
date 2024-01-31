import './css/styles.css';
import Triangle from './triangle.js';



document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const side1 = parseInt(document.getElementById("num1").value);
  const side2 = parseInt(document.getElementById("num2").value);
  const side3 = parseInt(document.getElementById("num3").value);
  const triangle = new Triangle(side1, side2, side3);
  let type = document.createElement("p");
  type.innerText = triangle.testing();
  document.getElementById("ans").append(type);
});