var average = 7;

function getAverage(a, b, c, d, e, f) {
  var average = (a + b + c + d + e + f) / 6; // local variable
  console.log(average);
  return average;
}

var myResult = getAverage(7, 8, 9, 10, 11, 12); // global variable

function logResult() {
  console.log("the average is " + myResult);
}
logResult();
