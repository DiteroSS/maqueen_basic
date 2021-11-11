def on_bluetooth_connected():
    basic.show_leds("""
        # # . # #
                # . # . #
                # # . . #
                # . # . #
                # # . . #
    """)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_mes_dpad_controller_id_microbit_evt():
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_C_DOWN:
        for index in range(3):
            basic.show_leds("""
                . . # . .
                                . # . . .
                                # # # # #
                                . # . . .
                                . . # . .
            """)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
            basic.pause(200)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_D_DOWN:
        for index2 in range(3):
            basic.show_leds("""
                . . # . .
                                . . . # .
                                # # # # #
                                . . . # .
                                . . # . .
            """)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
            basic.pause(200)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_D_DOWN:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_DOWN:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_DOWN:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, speed)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_DOWN:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_DOWN:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_UP:
        maqueen.motor_stop(maqueen.Motors.M1)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_UP:
        maqueen.motor_stop(maqueen.Motors.M2)
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

speed = 0
basic.show_leds("""
    # . . . #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
""")

def on_forever():
    basic.show_number(speed)
basic.forever(on_forever)

def on_forever2():
    global speed
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_A_DOWN:
        speed = speed + 5
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_B_DOWN:
        speed = speed - 5
basic.forever(on_forever2)

def on_forever3():
    global speed
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) <= 15:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, speed)
        basic.pause(1000)
        maqueen.motor_stop(maqueen.Motors.ALL)
        speed = 0
basic.forever(on_forever3)
