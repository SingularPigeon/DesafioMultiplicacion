// Función para solicitar un número entre 1 y 20
function solicitarNumero() {
  const numero = parseInt(
    prompt("Elige un número entre 1 y 20 para ver su tabla de multiplicar:")
  );

  if (numero >= 1 && numero <= 20) {
    document.write(`El número que elegiste es ${numero}.<br>`);
    console.log(`El número que elegiste es ${numero}.`);
    return numero;
  } else {
    console.log("Número fuera del rango");
    document.write("Número fuera del rango");
    return;
  }
}
const numero = solicitarNumero();

// Función para generar y mostrar la tabla de multiplicar de un número ingresado
function mostrarTabla(numero) {
  document.write(` La tabla de ${numero} es <br>`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    document.write(`<br><p>${numero} x ${i} = ${numero * i}</p>`);
  }
}
mostrarTabla(numero);

// Función que calcula el factorial del número ingresado
function calculoFactorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  console.log(`El Factorial de ${numero} es ${factorial}`);
  document.write(`<hr><br><p>El Factorial de ${numero} es ${factorial}</p>`);
}
calculoFactorial(numero);
