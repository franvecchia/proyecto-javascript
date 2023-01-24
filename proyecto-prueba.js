function insertar(num) {
    let numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}

function limpiar () {
    document.getElementById("display").innerHTML = "";
}

function back () { 
    let resultado = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular () {
    resultado = document.getElementById("display").innerHTML;
    if (resultado) {
        document.getElementById("display").innerHTML = eval(resultado);
    } else {
        display.innerHTML = "Vacío!";
        setTimeout(() => (display.innerHTML = ""), 1000);
    }
}

let porcentaje = document.getElementById("percentage");
porcentaje.addEventListener("click", () => {
    resultado = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = resultado / 100;

})

function resultadoLength () {
    resultado = JSON.stringify(resultado);

    if (resultado.length > 8) {
        resultado = JSON.parse(resultado);
        document.getElementById("display").innerHTML = resultado.toFixed(5);
    }
}

const botonCambio = document.querySelector(".theme-toggler");
const calculadora = document.querySelector(".calculator");

botonCambio.addEventListener("click", () => {
    calculadora.classList.toggle("dark");
    botonCambio.classList.toggle("active");

    if(calculadora.classList.contains("dark")){
        localStorage.setItem("modo-oscuro","true");

    } else {
        localStorage.setItem("modo-oscuro", "false");
    }
})

if (localStorage.getItem("modo-oscuro") === "true") {
    calculadora.classList.add("dark");
    botonCambio.classList.add("active");
} else {
    calculadora.classList.remove("dark");
    botonCambio.classList.remove("active");
}

let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json())
    .then( data => mostrarData(data))
    .catch( error => console.log(error))

const mostrarData = (data) => {
    let body = "";
    for (let i = 0; i < data.length; i++) {
        body+= `<tr class="user-table">
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].email}</td>
                </tr>`
    }
    document.getElementById('data').innerHTML = body;
}