let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion a realizar: +, -, *, /");
let resultado;

// Validar que las entradas sean números
if (isNaN(numero1) || isNaN(numero2)) {
  alert('Error: Por favor, ingresa solo números.'); 
} else if (operacion == "+") {
    resultado = numero1 + numero2;
} else if (operacion == "-") {
    resultado = numero1 - numero2;
} else if (operacion == "*") {
    resultado = numero1 * numero2;
} else if (operacion == "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error: Division por cero no es permitida.";
    }
} else {
    resultado = "Error: Operacion no valida.";
}

alert(`El resultado es: ${resultado}`);
