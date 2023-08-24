function oddNumbers(start, end) {
  let result = [];
  
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  
  return result;
}
console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));




function charCount(str, targetChar) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) {
      count++;
    }
  }
  
  return count;
}

console.log(charCount("hello", "l"));


console.log(charCount("mama", "m"));


console.log(charCount("Resümee", "e"))