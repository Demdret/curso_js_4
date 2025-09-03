let opciones = prompt("1. Pedir 2 números y sumarlos. Deben ser enteros positivos sino mostrar un alert de error. \n2.- Pedir un número mayor a 10 y mediante un for hacer una cuenta regresiva hasta 0. \n 3. Pedir un nombre y una edad e interpolarlas.")

switch (opciones) {
    case "1":
        let numero1 = Number(prompt("Ingresa el primer número"));
        let numero2 = Number(prompt("Ingresa el segundo número"));

        if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error: Debe ingresar únicamente números");
        } else if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        alert("Error: Debe ingresar únicamente números enteros");
        } else if (numero1 <= 0 || numero2 <= 0) {
        alert("Error: Debe ingresar números positivos");
        } else {
        console.log("La suma de los números es: " + (numero1 + numero2));
        }
    break
    case "2":
        let numero = Number(prompt("Ingresa un número mayor a 10"));

        if (isNaN(numero)) {
        alert("Error: Debe ingresar un número válido");
        } else if (numero <= 10) {
        alert("Error: El número debe ser mayor a 10");
        } else {
            for (numero; numero >= 0; numero--) {
                console.log(numero);
            }
        }
    break;
    case "3":
        var nombre = prompt("Ingresa tu nombre:");
        var edad = Number(prompt("Ingresa tu edad:"));

        if (
        nombre !== null &&
        nombre !== "" &&
        edad !== null &&
        edad !== "" &&
        !isNaN(edad) &&
        edad > 0
        ) {
        alert(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
        } else {
        alert("Error: Ingresa un nombre válido y una edad positiva.");
        }
    break;
    default:
        alert("Opcion no valida")
        break;
}