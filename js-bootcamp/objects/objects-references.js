let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let addExpenses = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
  account.income = account.income + income
}

let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account){
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 2.50)
addExpenses(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// addIncome

//resetAccount

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses

// addIncome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

// addExpenses(myAccount, 2.50)
// console.log(myAccount)