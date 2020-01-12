// Function - input, code, output (return value)

// let greetUser = function () {
//   console.log('Welcome user')
// }

// greetUser()
// greetUser()
// greetUser()

// let square = function (num) {
//     let result = num * num
//     return result
// }
// let value = square(3)
// let otherValue = square (10)

// console.log(value)
// console.log(otherValue)

// Chalenge Area
// Call a couple of times (32 --> 0) (68 -> 20)
// print the converted value

let convertFarenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  return celsius
} 

let temp1 = convertFarenheitToCelsius (32)
let temp2 = convertFarenheitToCelsius (68)

console.log(temp1)
console.log(temp2)
