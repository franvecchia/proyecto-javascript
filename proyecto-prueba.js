function insertar(num) {
    let numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}

function limpiar () {
    document.getElementById("display").innerHTML = "";
}

function back () {
    let resultado = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular () {
    resultado = document.getElementById("display").innerHTML;
    if (resultado) {
        document.getElementById("display").innerHTML = eval(resultado);
    }
    else {
        document.getElementById("display").innerHTML = "Nada para calcular";
    }
}

function resultadoLength () {
    resultado = JSON.stringify(resultado);

    if (resultado.length > 8) {
        resultado = JSON.parse(resultado);
        document.getElementById("display").innerHTML = resultado.toFixed(5);
    }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
calculator.classList.toggle("dark");
themeToggleBtn.classList.toggle("active");
isDark = !isDark;
}