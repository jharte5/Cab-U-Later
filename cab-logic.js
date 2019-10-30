const result = window.prompt('How Much is this Going To Run Me?')
const arrNum = result.split(' ')
operation = result[0]  
num1 = Number(arrNum[1])
num2 = Number(arrNum[2])
// Array Deconstruction
// const [operation, num1, num2] = result
const resolution = calculate(operation, num1, num2);
 
console.log(resolution)
const printAnswer = document.querySelector('#result');
printAnswer.innerText = resolution
