function doble(num) {
    resultado = num * 2;
    console.log("El doble del numero es: ", resultado)
}

function division(divisor, dividendo) {
    resultado = divisor/dividendo;
    console.log("Resultado de la division:", resultado);
}

function potencia (base_potencia,exponente_potencia) {
    resultado = base_potencia;
    for (i=1;i<exponente_potencia;i++) {
        resultado = resultado * base_potencia;
    }
    console.log("El resultado de la potencia es: ",resultado);
}

function numeroFactorial (factorial) {
    resultado = 1;
    for (i=1;i<=factorial;i++) {
        resultado = i * resultado;
    }
    console.log ("El factorial del numero es:", resultado);
}

function esPrimo(numero) {
    let primo = true;
    for (i=2;i<numero && primo == true ;i++) {
        if (numero % i == 0) {
            primo = false;
        }
    }
    if (primo == false) {
        console.log("El numero no es primo.");
    }
    else {
        console.log("El numero es primo");
    }
}

function calcular_raiz (numero, n) {
    if (numero < 0 ) {
        console.log("No existe la raiz de un numero negativo (En reales).");
    }

    return Math.pow(numero,1/n);
}

function calculadora () {
    let cantNumeros;
    let lista_numeros = [];
    let resultado;
    let i;
    let operacion = parseFloat(prompt("Ingrese la operación que desea realizar (El numero que indique segun lo que quiera realizar): "));

    if (operacion == 1) {
        let suma = 0;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=0;i<cantNumeros;i++) {
            lista_numeros[i] = parseInt(prompt("Ingrese los numeros a sumar"));
            suma = lista_numeros[i] + suma;
        }
        console.log("Resultado de la suma: ", suma);
    }
    else if (operacion == 2) {
        let resta = 0;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=1;i<=cantNumeros;i++) {
            lista_numeros[i] = parseFloat(prompt("Ingrese los numeros a restar: "));
            if (i>1) {
                lista_numeros[i] = lista_numeros[i] * -1;
            }
            resta = lista_numeros[i] + resta;
        }
        console.log ("Resultado de la resta: ", resta);
    }
    else if (operacion == 3) {
        let multiplicacion = 1;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=1;i<=cantNumeros;i++) {
            lista_numeros[i] = parseFloat(prompt("Ingrese los numeros a multiplicar: "));
            multiplicacion = lista_numeros[i] * multiplicacion;
        }
        console.log("Resultado de la multiplicacion:", multiplicacion);
    }
    else if (operacion == 4) {
        let divisor = parseFloat(prompt("Ingrese el divisor: "));
        let dividendo = parseFloat(prompt("Ingrese el dividendo: "));
        division(divisor,dividendo);
    }
    else if (operacion == 5) {
        let base_potencia = parseFloat(prompt("Ingrese la base:"));
        let exponente_potencia = parseFloat(prompt("Ingrese el exponente:"));
        potencia(base_potencia,exponente_potencia);
    }
    else if (operacion == 6) {
        let factorial = parseInt(prompt("Ingrese un numero para calcularle su factorial: "));
        numeroFactorial(factorial);
    }
    else if (operacion == 7) {
        let numero = parseInt(prompt("Ingrese un numero para saber si es o no primo: "));
        esPrimo(numero);
    }
    else if (operacion == 8) {
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=0;i<cantNumeros;i++) {
            lista_numeros[i]= parseInt(prompt("Ingrese un numero para doblarlo"));
        }
        lista_numeros.forEach(doble);
    }
    else if (operacion == 9) {
        let raiz_numero = parseFloat(prompt("Ingrese un numero para calcularle su raiz: "));
        let indice_raiz = parseFloat(prompt("Ingrese el indice de la raiz: "));
        console.log("El resultado es: ", calcular_raiz(raiz_numero, indice_raiz));
    }
    else if (operacion == 10) {
        let valor_exacto = prompt("Ingrese PI o E segun el valor que desee.");
        if (valor_exacto == "PI" || valor_exacto == "Pi" || valor_exacto == "pi") {
            resultado = Math.PI;
        }
        else if (valor_exacto == "E" || valor_exacto == "e") {
            resultado = Math.E;
        }
        else {
            console.log("Operacion no encontrada, intentelo nuevamente.");
        }
        console.log("Valor exacto: ", resultado);
    }
    else {
        console.log("Operacion no encontrada, intentelo nuevamente.");
    }
}
