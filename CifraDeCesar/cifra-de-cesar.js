addEventListener('load', start);

let inputCripto = document.getElementById('input-criptografar');
let saltoCripto = document.getElementById('salto-criptografar');
let resultadoCripto = document.getElementById('resultado-criptografia');

let inputDecripto = document.getElementById('input-decriptografar');
let saltoDecripto = document.getElementById('salto-decriptografar');
let resultadoDecripto = document.getElementById('resultado-decriptografia');

function start() {
  console.log('tudo workando');
  inputCripto.focus();
  inputCripto.addEventListener('keyup', handleTyping);
}

function handleTyping(event) {
  criptografar();
}

function criptografar() {
  let letras = inputCripto.value.split('');
  let letrasCharcode = [];
  let letrasCriptografadas = [];

  //convertendo letras para código ASCII

  for (i = 0; i < letras.length; i++) {
    letrasCharcode.push(letras[i].charCodeAt(0) + Number(saltoCripto.value));
  }

  //convertendo código ASCII para letras(+criptografia)
  for (i = 0; i < letrasCharcode.length; i++) {
    letrasCriptografadas.push(String.fromCharCode(letrasCharcode[i]));
  }

  resultadoCripto.textContent = `${letrasCriptografadas.join('')}`;
}

function decriptografar() {
  let letras = inputDecripto.value.split('');
  let letrasCharcode = [];
  let letrasDecriptografadas = [];

  //convertendo letras para código ASCII

  for (i = 0; i < letras.length; i++) {
    letrasCharcode.push(letras[i].charCodeAt(0) - Number(saltoDecripto.value));
  }

  //convertendo código ASCII para letras(+criptografia)
  for (i = 0; i < letrasCharcode.length; i++) {
    letrasDecriptografadas.push(String.fromCharCode(letrasCharcode[i]));
  }

  resultadoDecripto.textContent = `${letrasDecriptografadas.join('')}`;
}
