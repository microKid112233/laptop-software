input.onPinPressed(TouchPin.P0, function () {
    if (pass__true == 1) {
        if (app == 0) {
            if (part == 1) {
                I2C_LCD1602.ShowString("going to textin", 0, 0)
                I2C_LCD1602.ShowString("g app", 0, 1)
                basic.pause(500)
                I2C_LCD1602.clear()
                part = 0
                basic.pause(500)
                app = 1
            }
            if (part == 2) {
                I2C_LCD1602.ShowString("going to clock", 0, 0)
                basic.pause(500)
                I2C_LCD1602.clear()
                part = 0
                basic.pause(500)
                app = 2
                basic.pause(500)
            }
            if (part == 3) {
                I2C_LCD1602.ShowString("going to pass", 0, 0)
                basic.pause(500)
                I2C_LCD1602.clear()
                part = 0
                basic.pause(500)
                app = 3
                basic.pause(500)
                if (app == 3) {
                    I2C_LCD1602.ShowString("TorvanMicroBit45", 0, 0)
                }
            }
            if (part == 4) {
                I2C_LCD1602.ShowString("going to on/off", 0, 0)
                basic.pause(500)
                I2C_LCD1602.clear()
                part = 0
                basic.pause(500)
                app = 4
                basic.pause(500)
            }
            if (part == 5) {
                I2C_LCD1602.ShowString("going to 1 to 10", 0, 0)
                basic.pause(500)
                I2C_LCD1602.clear()
                part = 0
                basic.pause(500)
                app = 5
                basic.pause(500)
            }
        }
        if (app == 1) {
            I2C_LCD1602.ShowString("sending hi :)", 0, 0)
            basic.pause(500)
            I2C_LCD1602.clear()
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            radio.sendValue("torvan's laptop", 0)
            radio.sendString("hi")
            basic.pause(500)
            basic.clearScreen()
            I2C_LCD1602.ShowString("sent yay", 0, 0)
            basic.pause(500)
            I2C_LCD1602.clear()
        }
    }
    if (pass__true == 0) {
        a = 1
        if (_1rst == 1 && _2end == 1) {
            _3ed = 0
            I2C_LCD1602.ShowString("A", 2, 0)
        } else {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("fail", 0, 0)
            fail = 1
        }
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (pass__true == 1) {
        I2C_LCD1602.ShowNumber(receivedNumber, 0, 1)
        basic.pause(10000)
        I2C_LCD1602.clear()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (pass__true == 1) {
        part += 1
        if (app == 4) {
            month += 1
            if (month == 1) {
                I2C_LCD1602.BacklightOff()
            }
            if (month == 2) {
                I2C_LCD1602.BacklightOn()
                month = 0
            }
        }
        if (app == 0) {
            if (part > 5) {
                basic.pause(500)
                part = 0
            }
            if (part == 1) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowString("texting app", 0, 0)
            }
            if (part == 2) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowString("clock", 0, 0)
            }
            if (part == 3) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowString("torvan pass", 0, 0)
            }
            if (part == 4) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowString("off/on mode", 0, 0)
            }
            if (part == 5) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowString("1 to 10", 0, 0)
            }
        }
        if (app == 5) {
            if (randint(1, 10) == 1) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(1, 0, 0)
            }
            if (randint(1, 10) == 2) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(2, 0, 0)
            }
            if (randint(1, 10) == 3) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(3, 0, 0)
            }
            if (randint(1, 10) == 4) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(4, 0, 0)
            }
            if (randint(1, 10) == 5) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(5, 0, 0)
            }
            if (randint(1, 10) == 6) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(6, 0, 0)
            }
            if (randint(1, 10) == 7) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(7, 0, 0)
            }
            if (randint(1, 10) == 8) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(8, 0, 0)
            }
            if (randint(1, 10) == 9) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(9, 0, 0)
            }
            if (randint(1, 10) == 10) {
                I2C_LCD1602.clear()
                I2C_LCD1602.ShowNumber(10, 0, 0)
            }
        }
        if (app == 1) {
            I2C_LCD1602.ShowString("sending how are y", 0, 0)
            I2C_LCD1602.ShowString("you?", 0, 1)
            basic.pause(500)
            I2C_LCD1602.clear()
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            radio.sendValue("torvan's laptop", 0)
            radio.sendString("how are you")
            basic.pause(500)
            basic.clearScreen()
            I2C_LCD1602.ShowString("sent yay", 0, 0)
            basic.pause(500)
            I2C_LCD1602.clear()
        }
    }
    if (pass__true == 0) {
        c = 1
        _1rst = 1
        if (_3ed == 0 && _2end == 0) {
            I2C_LCD1602.ShowString("C", 0, 0)
        } else {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("fail", 0, 0)
            fail = 1
        }
    }
})
timeanddate.onMinuteChanged(function () {
    if (pass__true == 1) {
        minute += 1
    }
})
radio.onReceivedString(function (receivedString) {
    if (pass__true == 1) {
        I2C_LCD1602.ShowString(receivedString, 0, 1)
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 1) {
            I2C_LCD1602.ShowNumber(1, 14, 1)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 50) {
            I2C_LCD1602.ShowNumber(50, 14, 1)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 100) {
            I2C_LCD1602.ShowNumber(100, 14, 1)
        }
        basic.pause(10000)
        I2C_LCD1602.clear()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (pass__true == 1) {
        if (app == 4) {
            I2C_LCD1602.clear()
            part = 1
            app = 0
        }
        if (app == 3) {
            I2C_LCD1602.clear()
            part = 1
            app = 0
        }
        if (app == 2) {
            I2C_LCD1602.clear()
            part = 1
            app = 0
        }
        if (app == 1) {
            I2C_LCD1602.clear()
            part = 1
            app = 0
        }
        if (app == 5) {
            I2C_LCD1602.clear()
            part = 1
            app = 0
        }
        if (app == 1) {
            I2C_LCD1602.ShowString("sending I am good", 0, 0)
            I2C_LCD1602.ShowString("d you?", 0, 1)
            basic.pause(500)
            I2C_LCD1602.clear()
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            radio.sendValue("torvan's laptop", 0)
            radio.sendString("how are you")
            basic.pause(500)
            basic.clearScreen()
            I2C_LCD1602.ShowString("sent yay", 0, 0)
            basic.pause(500)
            I2C_LCD1602.clear()
        }
    }
    if (pass__true == 0) {
        b = 1
        if (_1rst == 1 && _3ed == 0) {
            _2end = 1
            I2C_LCD1602.ShowString("B", 1, 0)
        } else {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("fail", 0, 0)
            fail = 1
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (pass__true == 1) {
        I2C_LCD1602.ShowString(name, 0, 0)
        basic.pause(10000)
        I2C_LCD1602.clear()
    }
})
timeanddate.onHourChanged(function () {
    if (pass__true == 1) {
        hour += 1
    }
})
let pass_order_2 = 0
let pass_order_1 = 0
let pass_order = 0
let check = 0
let b = 0
let c = 0
let month = 0
let fail = 0
let _3ed = 0
let _2end = 0
let _1rst = 0
let a = 0
let app = 0
let part = 0
let hour = 0
let minute = 0
let second = 0
let pass__true = 0
for (let index = 0; index < 4; index++) {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("micro pc is", 0, 0)
    I2C_LCD1602.ShowString("starting", 0, 1)
    basic.pause(500)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("micro pc is", 0, 0)
    I2C_LCD1602.ShowString("starting.", 0, 1)
    basic.pause(500)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("micro pc is", 0, 0)
    I2C_LCD1602.ShowString("starting..", 0, 1)
    basic.pause(500)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("micro pc is", 0, 0)
    I2C_LCD1602.ShowString("starting...", 0, 1)
    basic.pause(500)
}
pass__true = 0
I2C_LCD1602.on()
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("password", 0, 1)
radio.setGroup(1)
if (pass__true == 1) {
    second = 0
    minute = 27
    hour = 2
    part = 0
    basic.pause(100)
}
basic.forever(function () {
    if (pass__true == 1) {
        if (app == 2) {
            I2C_LCD1602.ShowString("time...", 0, 0)
            I2C_LCD1602.ShowNumber(hour, 0, 1)
            I2C_LCD1602.ShowString(":", 2, 1)
            I2C_LCD1602.ShowNumber(minute, 3, 1)
        }
    }
    if (pass__true == 0) {
        let Part_a = 0
        if (Part_a == 3) {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("C", 0, 0)
            check = 5
            pass_order = 1
            if (b == 1) {
                I2C_LCD1602.ShowString("B", 1, 0)
                check = 2
                pass_order_1 = 3
            }
            if (a == 1) {
                I2C_LCD1602.ShowString("A", 2, 0)
                check = 1
                pass_order_2 = 5
            }
        }
        if (_1rst == 1 && (_2end == 1 && _3ed == 1)) {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("passkey good", 0, 0)
            pass__true = 1
        }
    }
})
