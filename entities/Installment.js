module.exports = class Installment {
  constructor(installmentValue, installmentNumber, situation) {
    this.installmentValue = installmentValue
    this.installmentNumber = installmentNumber
    
    if (situation === 'paga') {
      this.situation = situation
    }

    else if (situation === 'pendente') {
      this.situation = situation
    }

    else {
      console.log('A situação deve ser apenas paga ou pendente!')
    }
  }
}