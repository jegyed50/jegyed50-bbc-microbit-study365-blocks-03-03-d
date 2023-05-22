// wit 4 loop
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    // Top
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(pause_after_plot_LED)
    }
    // Bottom
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4)
        basic.pause(pause_after_plot_LED)
    }
    // Left
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
        basic.pause(pause_after_plot_LED)
    }
    // Rigth
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(pause_after_plot_LED)
    }
})
// with 2 loops
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    // Left & Rigth
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(pause_after_plot_LED)
        led.plot(index, 4)
        basic.pause(pause_after_plot_LED)
        led.plot(0, index)
        basic.pause(pause_after_plot_LED)
        led.plot(4, index)
        basic.pause(pause_after_plot_LED)
    }
})
// with 2 loops
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    // Left & Rigth
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(pause_after_plot_LED)
        led.plot(index, 4)
        basic.pause(pause_after_plot_LED)
    }
    // Top & Bottom
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
        basic.pause(pause_after_plot_LED)
        led.plot(4, index)
        basic.pause(pause_after_plot_LED)
    }
})
let pause_after_plot_LED = 0
led.setBrightness(125)
basic.showIcon(IconNames.Heart)
pause_after_plot_LED = 300
basic.forever(function () {
	
})
