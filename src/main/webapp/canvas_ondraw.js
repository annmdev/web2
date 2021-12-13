let r_px = 120;
let cutoff_len = 5
let x_centre = 210
let y_centre = 170

let cp = document.getElementById("coord-plane");
let ctx = cp.getContext("2d");
cp.width = 420;
cp.height = 340;

// ctx.strokeStyle = "#2f9aff";
ctx.fillStyle = "#2f9aff"
// ctx.lineWidth = 0
ctx.beginPath();
ctx.fillRect(x_centre, y_centre - r_px, r_px, r_px)

ctx.beginPath()
ctx.moveTo(x_centre, y_centre)
ctx.lineTo(x_centre + r_px / 2, y_centre)
ctx.lineTo(x_centre, y_centre + r_px / 2)
ctx.fill();

ctx.beginPath()
ctx.arc(x_centre, y_centre, r_px / 2, Math.PI, 3 * Math.PI / 2, false)
ctx.lineTo(x_centre, y_centre)
ctx.fill()

///////////////////////
ctx.lineWidth = 1
ctx.strokeStyle = "black";

ctx.moveTo(x_centre, 10);
ctx.lineTo(x_centre, 320);
ctx.moveTo(50, y_centre);
ctx.lineTo(370, y_centre);
ctx.stroke();

ctx.font = "large monospace";
ctx.fillStyle = "black"
ctx.fillText("y", x_centre - 15, 25);
ctx.fillText("x", 355, y_centre + 15)
ctx.fillText("R", x_centre + r_px - 5, y_centre + 18)
ctx.fillText("R/2", x_centre + r_px/2 - 10, y_centre + 18)

ctx.fillStyle = "#2f9aff"

for (let i = r_px; i >= -r_px; i -= r_px / 2) {
    ctx.moveTo(x_centre - cutoff_len, y_centre - i)
    ctx.lineTo(x_centre + cutoff_len, y_centre - i)
}

for (let i = r_px; i >= -r_px; i -= r_px / 2) {
    ctx.moveTo(x_centre + i, y_centre - cutoff_len)
    ctx.lineTo(x_centre + i, y_centre + cutoff_len)
}

ctx.stroke()

ctx.fillStyle = "#a9a9a9"
drawDots(ctx)


function drawDots(ctx) {
    let trs = document.querySelectorAll(".table-history-row")
    for (let i = 0; i < trs.length; i++) {
        let tds = trs[i].querySelectorAll("td")
        let r = tds[1].innerHTML
        let x = tds[2].innerHTML / r * r_px + x_centre
        let y = y_centre - tds[3].innerHTML / r * r_px
        let res = tds[4].innerHTML
        if (res == "true"){
            ctx.fillStyle = "green"
        } else {
            ctx.fillStyle = "red"
        }

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, 2 * Math.PI, false)
        ctx.fill()

    }
}
