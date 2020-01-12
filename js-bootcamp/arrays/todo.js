// const notes = ['Note 1', 'Note 2', 'Note 3']

//Re console.log(notes.length)

// console.log(notes[notes.length - 2])

// Cereate and array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

const todos = ['1. Call Jen', '2. Drive to school', '3. Do the homework', 
'4. Do exercise', '5. Sleep' ]


todos.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})

todos.splice(2, 1)
todos.push('This is added to the last item')
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function (item, index) {
  console.log(index + 1)
  console.log(item)
})


//1. The first item
//2. the second item

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list


//console.log(todos)
// console.log(`To do: ${todos[0]}`)
// console.log(`To do: ${todos[todos.length - 2]}`)

