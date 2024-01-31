export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
} 

Triangle.prototype.testing = function() {
  if (this.side1+this.side2<=this.side3 || this.side2+this.side3<=this.side1 || this.side1+this.side3<=this.side2){
      return("NOT A TRIANGLE");
  } else if(this.side1 === this.side2 && this.side2 === this.side3) {
      return("EQUILATERAL");
  } else if(this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
      return("ISOSCELES");
  } else {
      return("SCALENE");
  }
};
