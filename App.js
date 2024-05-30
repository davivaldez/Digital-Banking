const Loan = require("./entities/Loan")
const User = require("./entities/User")

module.exports = class App {
  static #users = []

  static findUser(email) {
    return App.#users.find(u => u.email === email)
  }

  static createUser(fullName, email) {
    const userExists = App.findUser(email)

    if (!userExists) {
      App.#users.push(new User(fullName, email))
    }

    else {
      console.log('Esse e-mail já está sendo utilizado!')
    }
  }

  static deposit(depositValue, email) {
    const user = App.findUser(email)

    if (user) {
      user.account.newDeposit(depositValue)
    }
  }

  static transfer(userSendTransfer, userReceiveTransfer, transferValue) {
    const userSend = App.findUser(userSendTransfer.accountUser.email)
    const userReceive = App.findUser(userReceiveTransfer.accountUser.email)

    if (userSend && userReceive) {
      userSend.account.newTransfer(userSendTransfer, userReceiveTransfer, transferValue)
      userReceive.account.newTransfer(userSendTransfer, userReceiveTransfer, transferValue)
    }
  }

  static loan(loanValue, installmentLoan, email) {
    const user = App.findUser(email)

    if (user) {
      user.account.newLoan(loanValue, installmentLoan)
    }
  }

  static changeInterestRate(newInterestRate) {
    Loan.interestRate = newInterestRate
  }

  static get users() {
    return App.#users
  }
}