module.exports = class Deposit {
  constructor(depositValue, email) {
    this.depositValue = depositValue
    this.email = email
    this.dateCreated = new Date()
  }
}