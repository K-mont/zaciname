input.onGesture(Gesture.LogoUp, function () {
    a = 4
    kruh.showRainbow(1, 360)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    a = 0
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.TiltRight, function () {
    a = 2
    kruh.showRainbow(1, 360)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onGesture(Gesture.LogoDown, function () {
    a = 3
    kruh.showRainbow(1, 360)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    a = 1
    kruh.showRainbow(1, 360)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
let a = 0
let kruh: neopixel.Strip = null
kruh = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
kruh.showRainbow(1, 360)
let cislo = 3
for (let index = 0; index < 4; index++) {
    basic.showNumber(cislo)
    basic.pause(100)
    cislo += -1
}
basic.clearScreen()
basic.forever(function () {
    if (a == 1) {
        kruh.rotate(1)
        kruh.show()
        basic.pause(50)
    } else if (a == 2) {
        kruh.rotate(-1)
        kruh.show()
        basic.pause(50)
    } else if (a == 3) {
        kruh.rotate(1)
        kruh.show()
        basic.pause(500)
    } else if (a == 4) {
        kruh.rotate(-1)
        kruh.show()
        basic.pause(500)
    } else if (a == 0) {
        basic.pause(100)
    }
})
