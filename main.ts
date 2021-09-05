let x = 0
let y = 0
basic.forever(function () {
    led.plot(x, y)
    basic.pause(200)
    led.unplot(x, y)
    if (x == 4) {
        y = (y + 1) % 5
    }
    x = (x + 1) % 5
})
