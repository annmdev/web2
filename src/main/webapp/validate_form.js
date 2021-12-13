let form = document.querySelector('.form-args');
let inputX = form.querySelector('input[name="arg-x"]');
let inputR = form.querySelector('input[name="arg-r"]');
let inputY = form.querySelector('input[name="arg-y"]');
let submit = form.querySelector('input[type="submit"]');
let select = form.querySelector('#select_x')

inputR.addEventListener('input', function () {
    if (!(/^\d+\.?\d{0,3}$/.test(inputR.value))) inputR.value = inputR.value.substr(0, inputR.value.length - 1)
})

inputY.addEventListener('input', function () {
    if (!(/^-?\d*\.?\d{0,3}$/.test(inputY.value)))
        inputY.value = inputY.value.substr(0, inputY.value.length - 1)
})


form.addEventListener('submit', function (event) {
    clearErr();

    if (!isRCorrect(inputR.value)) {
        event.preventDefault();
        generateErr("r is wrong", event);
        inputR.style.borderColor = "red";
    }
    if (!isYCorrect(inputY.value)) {
        event.preventDefault();
        generateErr("y is wrong", event);
        inputY.style.borderColor = "red";
    }

});

function isRCorrect(r) {
    return r && (r > 1 && r < 4)
}

function isYCorrect(y) {
    return y && (y > -3 && y < 3)
}

function isXCorrect(x) {
    return x && (x <= 2 && x >= -2)
}

function clearErr() {
    inputR.style.borderColor = "black"
    inputY.style.borderColor = "black"
    let errMessages = document.querySelectorAll(".input_err")
    for (const err of errMessages) {
        err.remove()
    }
}

function generateErr(text) {
    let errMessage = document.createElement("div");
    errMessage.textContent = text;
    errMessage.className = "input_err"
    submit.after(errMessage);
}
