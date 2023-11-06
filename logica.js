const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const resultadoSpan = document.getElementById('resultado');

document.getElementById('sumar').addEventListener('click', function () {
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  const resultado = numero1 + numero2;
  resultadoSpan.textContent = resultado;
});

document.getElementById('restar').addEventListener('click', function () {
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  const resultado = numero1 - numero2;
  resultadoSpan.textContent = resultado;
});

document.getElementById('multiplicar').addEventListener('click', function () {
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  const resultado = numero1 * numero2;
  resultadoSpan.textContent = resultado;
});

document.getElementById('dividir').addEventListener('click', function () {
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  if (numero2 !== 0) {
    const resultado = numero1 / numero2;
    resultadoSpan.textContent = resultado;
  } else {
    resultadoSpan.textContent = 'Error: División por cero';
  }
});


// resultadoSpan.textContent = resultado;
// callback('Operación realizada correctamente');
// ;

// document.getElementById('sumar').addEventListener('click', function () {
// performOperation('sumar', (message) => {
//   alert(message);
// });
// });

// document.getElementById('restar').addEventListener('click', function () {
// performOperation('restar', (message) => {
//   alert(message);
// });
// });

// document.getElementById('multiplicar').addEventListener('click', function () {
// performOperation('multiplicar', (message) => {
//   alert(message);
// });
// });

// document.getElementById('dividir').addEventListener('click', function () {
// performOperation('dividir', (message) => {
//   alert(message);
// });
// });