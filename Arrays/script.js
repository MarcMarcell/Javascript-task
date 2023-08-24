function removeItem(array, index) {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 0));
console.log(animals);

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 2));
console.log(fruits);



function sumOfCharacters(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    }
  }
  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));