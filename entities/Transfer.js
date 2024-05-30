module.exports = class Transfer {
  constructor(userSendTransfer, userReceiveTransfer, transferValue) {
    this.userSendTransfer = userSendTransfer
    this.userReceiveTransfer = userReceiveTransfer
    this.transferValue = transferValue
    this.dateCreated = new Date()
  }
}