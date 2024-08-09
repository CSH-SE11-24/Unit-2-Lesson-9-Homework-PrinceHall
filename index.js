// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number

let number = prompt("Give me a number")

number = parseInt(number)

// Prompt the user for another number that is bigger than the first number and cast it to a number

let number2 = prompt("Give me a bigger number")

number2 = parseInt(number2)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let placeholder = number ;placeholder<=number2;placeholder++){
  console.log(placeholder)
}




// PART 2: Averaging an array
// Create an array of numbers 

let array = [2,505,92,1, 7,21, 8]


// Write a for loop that calculates the sum of the elements 

let sum = 0

for(let i = 0;i<array.length;i++){

   sum = sum + array[i]
  
}

console.log(sum)


// Using the sum, calculate the average of all the elements (sum divided by the length of the array)

let average =sum/array.length

console.log(average)
