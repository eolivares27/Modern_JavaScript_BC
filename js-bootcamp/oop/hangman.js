// Prototypal Inheritance

const Person = function (firstNane, lastName, age, likes = []){
  this.firstNane = firstName
  this.lastName = lastname
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
let bio = `${this.firstName} is ${this.age}.`  

this.likes.forEach((like) => {
  bio += `${this.firstName} likes ${like}`
})
   return bio
}

Person.prototype.lastName = function (fullName){
  const names = fullname.split(' ')
  this.firstName = names[0]
  this.lastName = names[1]
}

const me = new Person ('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio)

const person2 = new Person ('Clancey', 'Turner', 51)
console.log(person2.getBio())

const Hangman = function(word, remainingGueses){
  this.word = word
  this.remainingGueses= remainingGueses
}

const game1 = new Hangman ('Cat', 2)
console.log(game1)

const game2 = new Hangman ('New York', 4)
console.log(game2)

