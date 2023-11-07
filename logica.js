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

function suma (a,b,callback){
  let c = a +b;
  callback();
  }
  
  suma(1,2,function(){
  console.log("La suma es 3");
  });