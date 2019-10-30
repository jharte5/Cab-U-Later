const result = window.prompt('How Much Is This Going To Run Me? \
                                Morning Commute? y/n \
                                Evening Commute? y/n \
                                Miles? ')
const arrNum = result.split(' ')
morningCommute = result[0]  
eveningCommute = result[2]
miles = Number(arrNum[2])
// Array Deconstruction
// const [operation, num1, num2] = result
const resolution = checkRideCost(morningCommute, eveningCommute, miles);
 
console.log(resolution)
const printAnswer = document.querySelector('#result');
printAnswer.innerText = resolution
