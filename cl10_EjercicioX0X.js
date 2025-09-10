function esBeneficiario() {
    let promedio = Number(prompt("Ingrese su promedio:"));
    let ingresosFamiliares = Number(prompt("Ingrese sus ingresos familiares:"));
    let familiarDirectivo = prompt("¿Tiene un familiar directivo en la institución? (si/no)").toLowerCase();

    if (isNaN(promedio) || isNaN(ingresosFamiliares) || promedio < 0 || ingresosFamiliares < 0){
        alert("Error: Debe ingresar únicamente números para promedio e ingresos familiares.");
    } else if (promedio >= 9 && ingresosFamiliares < 1000 || familiarDirectivo === "si") {
        alert("Usted es beneficiario de beca completa");
    } else  if (promedio > 7 && ingresosFamiliares < 500) {
        alert("Usted es beneficiario de beca parcialmente");
    } else {
        alert("Usted no es beneficiario de beca");
    }
}

esBeneficiario();