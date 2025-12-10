radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
