let name = '   Andrew Mead    '

// lenght property
console.log(name.length)

// Convert to upper case method

console.log(name.toUpperCase())

// Convert to lower case

console.log(name.toLowerCase())

//Include method

let password = 'abc1213password098'

console.log(password.includes('password'))

// Trim to remove spaces at the beggining and the end

console.log(name.trim())

let isValidPassword = function (pass) {
  if (!pass.includes('password') && pass.length > 8)
    return true
    else
    return false
}


// Chalenge area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abcd123!@#$^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))

