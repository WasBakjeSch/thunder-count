let flashTime = 0
let thunderTime = 0
let elapsedMilliseconds = 0
let distanceMeters = 0
let dotIndex = 0
input.onButtonPressed(Button.A, function () {
    flashTime = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    if (flashTime > 0) {
        thunderTime = input.runningTime()
        elapsedMilliseconds = thunderTime - flashTime
        distanceMeters = elapsedMilliseconds * 0.343 / 1000
        let distanceString = distanceMeters.toString();
// Limit the decimal places to 2
        dotIndex = distanceString.indexOf(".")
        if (dotIndex != -1 && distanceString.length > dotIndex + 3) {
            distanceString = distanceString.substr(0, dotIndex + 3)
        }
        basic.showString("Distance: " + distanceString + "m")
    } else {
        basic.showString("No flash detected")
    }
})
