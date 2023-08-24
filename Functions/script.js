function welcomeMsg(name) {
  // return "Welcome" + name
  return `Welcome ${name}`;
}

console.log(welcomeMsg(" Marc"));
console.log(welcomeMsg(" Jane"));

function calcGrossPrice(netprice, taxrate) {
  return netprice + netprice * taxrate;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(num1, num2) {
  return Math.abs (num1 + num2);
}


console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

