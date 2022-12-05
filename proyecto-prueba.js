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

function calculadora () {
    let operacion = parseFloat(prompt("Ingrese la operación que desea realizar (El numero que indique segun lo que quiera realizar): "));
    let cantNumeros;
    let resultado = 0;
    let i;

    if (operacion == 1) {
        let suma;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=1;i<=cantNumeros;i++) {
            suma = parseFloat(prompt("Ingrese los numeros a sumar: "));
            resultado = resultado + suma;
        }
        console.log("Resultado de la suma: ", resultado);
    }
    else if (operacion == 2) {
        let resta;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        for (i=1;i<=cantNumeros;i++) {
            resta = parseFloat(prompt("Ingrese los numeros a restar: "));
            if (i>1) {
                resta = resta * -1;
            }
            resultado = resultado + resta;
        }
        console.log ("Resultado de la resta: ", resultado);
    }
    else if (operacion == 3) {
        let multiplicacion;
        cantNumeros = parseInt(prompt("Ingrese la cantidad de numeros: "));
        resultado = 1;
        for (i=1;i<=cantNumeros;i++) {
            multiplicacion = parseFloat(prompt("Ingrese los numeros a multiplicar: "));
            resultado = multiplicacion * resultado;
        }
        console.log("Resultado de la multiplicacion:", resultado);
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
        let factorial = parseInt(prompt("Ingrese un numero: "));
        numeroFactorial(factorial);
    }
    else if (operacion == 7) {
        let numero = parseInt(prompt("Ingrese un numero: "));
        esPrimo(numero);
    }
    else {
        console.log("Operacion no encontrada.");
    }
}
