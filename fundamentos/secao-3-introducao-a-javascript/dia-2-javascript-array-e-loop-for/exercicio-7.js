let numbers = [5, 1, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log("Menor valor do array é: " , smallestNumber);