// Global scope (convertFarenheitToCelsius, tempOne, tempTwo)
   //Local scope(fahrenheit, celsius)
      // Local scope (isFreezing)

let convertFarenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  if (celsius <= 0){
    let isFreezing = true
  }

  return celsius
} 

let temp1 = convertFarenheitToCelsius (32)
let temp2 = convertFarenheitToCelsius (68)

console.log(temp1)
console.log(temp2)
