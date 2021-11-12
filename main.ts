input.onButtonPressed(Button.A, function () {
    music.playMelody("F E F E G D A A ", 359)
})
let speed = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # . . . #
    # # # # .
    `)
basic.pause(1000)
basic.showIcon(IconNames.Ghost)
basic.pause(1000)
basic.showLeds(`
    # # # # #
    # # . # #
    # . # . #
    # # . # #
    # # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.pause(1000)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    . # . # .
    `)
basic.pause(1000)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    # . # . #
    `)
basic.pause(1000)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        speed = 0
    }
})
