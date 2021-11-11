bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # . # . #
        # # . . #
        # . # . #
        # # . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(200)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(200)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        maqueen.motorStop(maqueen.Motors.M2)
    }
})
let speed = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        speed += 1
    } else {
        if (speed == 250) {
            speed = 250
        }
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        speed = speed - 5
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        speed = 0
    }
})
basic.forever(function () {
    basic.showNumber(speed)
})
