input.onButtonPressed(Button.A, function () {
    serial.writeLine("A pressed")
})
serial.writeLine("started...")
