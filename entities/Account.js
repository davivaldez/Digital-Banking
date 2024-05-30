const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
  #balance
  constructor(accountUser) {
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
    this.accountUser = accountUser
  }

  get balance() {
    return this.#balance
  }

  newDeposit(depositValue) {
    this.#balance += depositValue
    this.deposits.push(new Deposit(depositValue, this.accountUser.email))
  }

  newLoan(loanValue, installmentLoan) {
    this.#balance += loanValue
    this.loans.push(new Loan(loanValue, installmentLoan, this.accountUser.email))
  }

  newTransfer(userSendTransfer, userReceiveTransfer, transferValue) {
    if (userReceiveTransfer.accountUser.email === this.accountUser.email) {
      this.#balance += transferValue
      this.transfers.push(new Transfer(userSendTransfer, userReceiveTransfer, transferValue))
    }

    else {
      this.#balance -= transferValue
      this.transfers.push(new Transfer(userSendTransfer, userReceiveTransfer, transferValue))
    }
  }
}