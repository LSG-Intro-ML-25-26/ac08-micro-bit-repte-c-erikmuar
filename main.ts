input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola microbit A!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hola microbit B!")
})
radio.setGroup(1)
