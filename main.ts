gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    radio.sendValue("SERVO_L", 1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("READTEMP", 1)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    radio.sendValue("SERVO_R", 1)
})
function DRIVE_DISPLAY () {
    if (0 == Math.abs(LEFT) + Math.abs(RIGHT)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (2 == LEFT + RIGHT) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (-2 == LEFT + RIGHT) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (LEFT == 0 && RIGHT == -1) {
        basic.showLeds(`
            . . . . .
            # # . . .
            . . # . #
            . . . # #
            . . # # #
            `)
    } else if (LEFT == -1 && RIGHT == 0) {
        basic.showLeds(`
            . . . . .
            . . . # #
            # . # . .
            # # . . .
            # # # . .
            `)
    } else if (LEFT == -1 && RIGHT == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            . # # . .
            # # # . .
            `)
    } else if (LEFT == 1 && RIGHT == -1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            . . # # .
            . . # # #
            `)
    } else if (LEFT == 1) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . .
            `)
    } else if (RIGHT == 1) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    if (Math.abs(LEFT) == 1) {
        LEFT = 0
    } else {
        LEFT = 1
    }
    radio.sendValue("LEFT", LEFT)
    DRIVE_DISPLAY()
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("READLIGHT", 1)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    if (LEFT == 1 && RIGHT == 1) {
        LEFT = 0
        RIGHT = 0
    } else {
        LEFT = -1
        RIGHT = -1
    }
    radio.sendValue("LEFT", LEFT)
    radio.sendValue("RIGHT", RIGHT)
    DRIVE_DISPLAY()
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    if (Math.abs(RIGHT) == 1) {
        RIGHT = 0
    } else {
        RIGHT = 1
    }
    radio.sendValue("RIGHT", RIGHT)
    DRIVE_DISPLAY()
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    if (LEFT == -1 && RIGHT == -1) {
        LEFT = 0
        RIGHT = 0
    } else {
        LEFT = 1
        RIGHT = 1
    }
    radio.sendValue("LEFT", LEFT)
    radio.sendValue("RIGHT", RIGHT)
    DRIVE_DISPLAY()
})
let RIGHT = 0
let LEFT = 0
radio.setGroup(1)
LEFT = 0
RIGHT = 0
DRIVE_DISPLAY()
basic.forever(function () {
	
})
