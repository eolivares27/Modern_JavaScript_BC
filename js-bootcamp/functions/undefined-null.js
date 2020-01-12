// Undefined for variable
let name
//console.log(name)

name = 'Jen'

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}

// Undefine for functions arguments
let square = function (num) {
  console.log(num)
}

let result = square()
console.log(result)

//nulll as assigned value

let age = 274

age = null

console.log(age)