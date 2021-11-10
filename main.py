def on_button_pressed_a():
    basic.show_icon(IconNames.CONFUSED)
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.HAPPY)
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
