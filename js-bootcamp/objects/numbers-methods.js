let num = 103.941
console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - 10
// console.log(randomNum)

// Chalenge area
// 1 - 5 - true if correct - falseer idf not correct

let makeGuest = function (guess) {
  let min = 1
  let max = 5
  let randomN= Math.floor(Math.random() * (max - min + 1)) + min
  return guess === randomN 
}

console.log(` guess 1 boolean ${makeGuest(1)}`)