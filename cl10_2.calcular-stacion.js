function calcularEstacion() {
  let dia = Number(prompt("ingresa el día actual (1-31)"));
  let mes = Number(prompt("ingresa el mes actual (1-12)"));
  let anio = Number(prompt("ingresa el año actual"));

  if (
    dia <= 0 ||
    dia > 31 ||
    mes <= 0 ||
    mes > 12 ||
    anio <= 0 ||
    (mes === 2 && dia > 29)
  ) {
    console.log("Debes ingresar una fecha válida");
  }

  if (dia >= 1 && mes >= 3 && dia <= 31 && mes <= 5) {
    return `La estacion actual es Primavera del año: ${anio}`;
  }

  if (dia >= 1 && mes >= 6 && dia <= 31 && mes <= 8) {
    return `La estacion actual es Verano del año: ${anio}`;
  }

  if (dia >= 1 && mes >= 9 && dia <= 31 && mes <= 11) {
    return `La estacion actual es Otoño del año: ${anio}`;
  }

  return `La estacion actual es Invierno del año: ${anio}`;
}

const estacion = calcularEstacion();
alert(estacion);
