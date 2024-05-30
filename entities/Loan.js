const Installment = require("./Installment")

module.exports = class Loan {
  static #interestRate = 1.1
  static #count = 0

  constructor(loanValue, installmentLoan, email) {
    this.loanValue = loanValue
    this.installmentLoan = []
    this.email = email
    this.dateCreated = new Date()

    while (Loan.#count < installmentLoan) {
      Loan.#count++
      this.installmentLoan.push(new Installment((this.loanValue * Loan.#interestRate) / installmentLoan, Loan.#count, 'pendente'))
    }
    Loan.#count = 0
  }

  static set interestRate(newInterestRate) {
    Loan.#interestRate = 1 + (newInterestRate / 100)
  }

  static get interestRate() {
    return Loan.#interestRate
  }
}