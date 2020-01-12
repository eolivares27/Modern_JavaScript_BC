let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A People History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
  
  //console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherbookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area
// Create a function - take fahrenheit in - return object with all three

let tempConversion = function(fahrenheit){
let celsius = (fahrenheit - 32) * (5 / 9)
let kelvin = (fahrenheit +459.67) * (5 / 9)
return {
  fahrenheit: fahrenheit,
  celsius: celsius,
  kelvin: kelvin
  }
}

let temp1 = tempConversion(74)

console.log(temp1)
