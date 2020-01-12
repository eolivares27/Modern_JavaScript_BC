const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new notes')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1)

notes[2] =  'New note 3'

notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})

console.log(notes.length)
console.log(notes)