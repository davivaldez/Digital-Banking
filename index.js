const App = require("./App");

App.createUser('User 1', 'user1@email.com')
App.createUser('User 2', 'user2@email.com')
App.createUser('User 3', 'user3@email.com')

App.deposit(150, 'user1@email.com')

const user1 = App.findUser('user1@email.com')
const user2 = App.findUser('user2@email.com')

console.log(App.findUser("user1@email.com").account.balance)
console.log(App.findUser("user2@email.com").account.balance)
console.log(App.findUser("user3@email.com").account.balance)

App.transfer(user1.account, user2.account, 30)

console.log(App.findUser("user1@email.com").account.balance)
console.log(App.findUser("user2@email.com").account.balance)

App.changeInterestRate(15)
App.loan(1500, 12, 'user3@email.com')
App.loan(2000, 24, 'user3@email.com')
console.log(App.findUser("user3@email.com").account.balance)

console.log(App.findUser("user1@email.com"))
console.log(App.findUser("user1@email.com").account)
console.log(App.findUser("user1@email.com").account.deposits[0].depositValue)
console.log(App.findUser("user1@email.com").account.transfers[0])

console.log(App.findUser("user2@email.com").account.transfers[0])
console.log(App.findUser("user2@email.com"))
console.log(App.findUser("user2@email.com").account)

console.log(App.findUser("user3@email.com"))
console.log(App.findUser("user3@email.com").account)
console.log(App.findUser("user3@email.com").account.loans[0].installmentLoan)
console.log(App.findUser("user3@email.com").account.loans[1].installmentLoan)

console.log(App.users)