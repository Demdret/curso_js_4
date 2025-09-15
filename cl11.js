//Declaración de objetos
const carro1 = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  color: "Rojo"
};

const carro2 = {
  marca: "Ford",
  modelo: "Mustang",
  año: 2023,
  color: "Negro"
};

//Solicitud de información al usuario
let respuesta = prompt("¿De que carro dese saber la información? (1 o 2)");

//Validación de la respuesta y despliegue de la información
if (respuesta !== "1" && respuesta !== "2") {
  console.log("Ingresaste una respuesta inválida, debiste escoger (1 o 2)");
} else if (respuesta === "1") {
    console.table(carro1);
} else {
    console.table(carro2);
}