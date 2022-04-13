servos.P0.setAngle(0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        servos.P0.setAngle(90)
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.SmallSquare)
        servos.P0.setAngle(0)
    }
})
