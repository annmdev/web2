let canvas_onclick = document.getElementById("coord-plane");
canvas_onclick.addEventListener("click", function (event) {
    clearErr()
    let coord_x = event.offsetX - x_centre
    let coord_y = y_centre - event.offsetY
    // alert(coord_x + "     " + coord_y)

    let r = inputR.value
    if (r != null && isRCorrect(r)) {
        let y_val = Math.floor(r * coord_y / r_px * 1000) / 1000
        let x_val = getSelectVal(Math.floor(r * coord_x / r_px * 1000) / 1000)
        if (isXCorrect(x_val) && isYCorrect(y_val)) {
            inputY.value = y_val
            select.value = x_val
            // alert(inputY.value + " >>>> " + select.value)
            form.submit()
        } else {
            generateErr("Incorrect coordinates. Watch: -2 <= x <= 2, -3 < y < 3")
        }
    } else {
        generateErr("Can't define x and y. Please enter the correct value for r")
    }
})

function getSelectVal(x) {
    return Math.round(100 * x / 50) * 50 / 100
}

