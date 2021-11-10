input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Confused)
    pins.digitalWritePin(DigitalPin.P0, 1)
    while (true) {
        if (input.lightLevel() < 100) {
            basic.showIcon(IconNames.House)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showIcon(IconNames.Heart)
