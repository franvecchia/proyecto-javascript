let operandoA;
let operandoB;
let operacion;
//variables
let resultado = document.getElementById("display");
let reset = document.getElementById("reset");
let suma = document.getElementById("+");
let resta = document.getElementById("-");
let multiplicacion = document.getElementById("*");
let division = document.getElementById("/");
let igual = document.getElementById("equal");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");
let cero = document.getElementById("0");

    uno.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "1";
    })

    dos.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "2";
    })

    tres.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "3";
    })

    cuatro.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "4";
    })

    cinco.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "5";
    })

    seis.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "6";
    })

    siete.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "7";
    })

    ocho.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "8";
    })

    nueve.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "9";
    })

    cero.addEventListener("click", function(){
        resultado.textContent = resultado.textContent + "0";
    })

    reset.addEventListener("click", function() {
        resetear();
    })

    suma.addEventListener("click", function(){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    })

    resta.addEventListener("click", function(){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    })

    multiplicacion.addEventListener("click", function(){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    })

    division.addEventListener("click", function(){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    })

    igual.addEventListener("click", function(){
        operandoB = resultado.textContent;
        resolver();
    })

    function limpiar () {
        resultado.textContent = "";
    }
    
    function resetear () {
        resultado.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operacion = "";
    }

function resolver () {
    let res = 0;
    if (operacion == "+") {
        res = parseFloat(operandoA) + parseFloat(operandoB);
    }
    else if (operacion == "-") {
        res = parseFloat(operandoA) - parseFloat(operandoB);
    }
    else if (operacion == "*") {
        res = parseFloat(operandoA) * parseFloat(operandoB);
    }
    else if (operacion == "/") {
        res = parseFloat(operandoA) / parseFloat(operandoB);
    }
    resetear();
    resultado.textContent = res;
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};