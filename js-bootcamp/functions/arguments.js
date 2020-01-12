let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function(name ='Anonymous', score = 0){
  return `Name: ${name} - Score ${score}`
  //return 'Name: '+ name + ' - Score: ' + score
}
let scoreText = getScoreText(undefined,99)
console.log(scoreText)

// Challenge area
// total, tipPercent

let tipCalculator = function (total, tipPercent = 0.18){
  let percent = tipPercent * 100
  let tip = total * tipPercent  
  return `A ${percent}% tip on $${total} would be $${tip}`
  //return total * tipPercent
}
console.log(tipCalculator(100))


// let name = 'Vikram'
// let age = 12
// console.log(`I am ${age} years old. Hey, my name is ${name}!`)

