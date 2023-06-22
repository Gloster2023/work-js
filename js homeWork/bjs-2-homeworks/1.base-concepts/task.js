"use strict"
// function solveEquation(a, b, c) {
//   let arr = [];
//   if (a == 0){
//   console.log("это не квадратное уравнение");
//   return false
// }
  
//   let discriminant = b*b -4*a*c;
//   console.log("D= " + discriminant);
  
// if (discriminant < 0){
//   console.log("корней нет");
// }
// if (discriminant == 0){
//   arr.push(-b/2*a);
// }
// else if(discriminant > 0){
// arr.push(-b + Math.sqrt(discriminant) )/(2*a);
// arr.push(-b - Math.sqrt(discriminant) )/(2*a);
// }
//   return arr;
// }
// ---------------------------------------------------------------------------
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
 percent = percent / 12;
 let S = amount - contribution;
 let payment = S * (percent + (percent / ((Math.pow(1 + percent, countMonths))- 1)));
 console.log(payment);
 
}
