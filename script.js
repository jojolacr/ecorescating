let contenedor = document.getElementById("contenedor");
let basura = document.getElementById("basura");
let scoreDisplay = document.getElementById("score");

let contenedorPos = 125;
let basuraPosY = 0;
let basuraPosX = Math.floor(Math.random() * 270);
let score = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" && contenedorPos > 0) {
        contenedorPos -= 20;
    } else if (event.key === "ArrowRight" && contenedorPos < 250) {
        contenedorPos += 20;
    }
    contenedor.style.left = contenedorPos + "px";
});

function moverBasura() {
    basura.style.top = basuraPosY + "px";
    basura.style.left = basuraPosX + "px";
    basuraPosY += 5;

    if (basuraPosY > 370) {
        if (basuraPosX >= contenedorPos && basuraPosX <= contenedorPos + 50) {
            score++;
            scoreDisplay.innerText = score;
        }
        basuraPosY = 0;
        basuraPosX = Math.floor(Math.random() * 270);
    }

    requestAnimationFrame(moverBasura);
}

moverBasura();
