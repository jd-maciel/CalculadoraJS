//Calculadora 
var botaoUm = document.getElementById('btn1');
var botaoDois = document.getElementById('btn2');
var botaoTres = document.getElementById('btn3');
var botaoQuatro = document.getElementById('btn4');
var botaoCinco = document.getElementById('btn5');
var botaoSeis = document.getElementById('btn6');
var botaoSete = document.getElementById('btn7');
var botaoOito = document.getElementById('btn8');
var botaoNove = document.getElementById('btn9');
var botaoZero = document.getElementById('btn0');
var botaoPonto = document.getElementById('btnPonto');
var botaoLimpar = document.getElementById('btnLimpar');
var botaoBackspace = document.getElementById('btnBackspace');

var verResultado = document.getElementById('res');

botaoUm.value = 1;
botaoDois.value = 2;
botaoTres.value = 3;
botaoQuatro.value = 4;
botaoCinco.value = 5;
botaoSeis.value = 6;
botaoSete.value = 7;
botaoOito.value = 8;
botaoNove.value = 9;
botaoZero.value = 0;
botaoPonto.value = '.';


var botaoSoma  = document.getElementById('soma');
var botaoMultiplicacao  = document.getElementById('multiplicacao');
var botaoSubtracao  = document.getElementById('subtracao');
var botaoDivisao  = document.getElementById('divisao');
var botaoIgual = document.getElementById('igual');
var numero1 = 0;
var numero2 = 0;
var operacao = ''; //USAR NO IF

//MULTIPLICAÇÃO ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoMultiplicacao.addEventListener('click', Multiplicacao);

function Multiplicacao() {
  
  numero1 = parseFloat(verResultado.textContent);  
   
  verResultado.textContent = ''; //LIMPA CAMPO
  
  operacao = '*'; //USAR NO IF   

 }

//SOMA ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoSoma.addEventListener('click', Soma);

function Soma() {
  
  numero1 = parseFloat(verResultado.textContent);  
   
  verResultado.textContent = ''; //LIMPA CAMPO
  
  operacao = '+'; //USAR NO IF   

 }

//SUBTRACAO ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoSubtracao.addEventListener('click', Subtracao);

function Subtracao() {
  
  numero1 = parseFloat(verResultado.textContent);  
   
  verResultado.textContent = ''; //LIMPA CAMPO
  
  operacao = '-'; //USAR NO IF   

 }

//DIVISAO ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoDivisao.addEventListener('click', Divisao);

function Divisao() {
  
  numero1 = parseFloat(verResultado.textContent);  
   
  verResultado.textContent = ''; //LIMPA CAMPO
  
  operacao = '/'; //USAR NO IF   

 }

//IGUAL ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoIgual.addEventListener('click', Igual );

function Igual() {
  
  if (operacao == "+"){
    numero2 = parseFloat(verResultado.textContent); 
  
  verResultado.textContent = ''; 
  
  verResultado.textContent = numero1 + numero2;  
  } 
  
    if (operacao == "*"){
    numero2 = parseFloat(verResultado.textContent); 
  
    verResultado.textContent = ''; 
  
     verResultado.textContent = numero1 * numero2;
  } 
  
  if (operacao == "-"){
    numero2 = parseFloat(verResultado.textContent); 
  
    verResultado.textContent = ''; 
  
     verResultado.textContent = numero1 - numero2;
  } 
  
  if (operacao == "/"){
    numero2 = parseFloat(verResultado.textContent); 
  
    verResultado.textContent = ''; 
  
     verResultado.textContent = numero1 / numero2;
  } 
}

//BOTAO LIMPAR::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoLimpar.addEventListener('click', ExibirLimpar);

function ExibirLimpar() {
   numero1 = 0;
   numero2 = 0;
   verResultado.textContent = '';   
 
 }

//BOTAO Backspace::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoBackspace.addEventListener('click', ExibirLimparUm);

function ExibirLimparUm() {
 
  let inputText = verResultado.textContent; 
  
  verResultado.textContent = inputText.substring(0,inputText.length-1);  
}



//BOTAO PONTO  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
botaoPonto.addEventListener('click', ExibirPonto);

function ExibirPonto() {
   
   verResultado.textContent = verResultado.textContent + botaoPonto.value;  

 }

//BOTAO 1  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn1.addEventListener('click', Exibirbtn1);

function Exibirbtn1() {
   
   verResultado.textContent = verResultado.textContent + botaoUm.value;
  

 }

//BOTAO 2 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn2.addEventListener('click', Exibirbtn2);

function Exibirbtn2() {
   
   verResultado.textContent = verResultado.textContent + botaoDois.value;

 }

//BOTAO 3 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn3.addEventListener('click', Exibirbtn3);

function Exibirbtn3() {
   
   verResultado.textContent = verResultado.textContent + botaoTres.value;

 }

//BOTAO 4 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn4.addEventListener('click', Exibirbtn4);

function Exibirbtn4() {
   
   verResultado.textContent = verResultado.textContent + botaoQuatro.value;

 }

//BOTAO 5 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn5.addEventListener('click', Exibirbtn5);

function Exibirbtn5() {
   
   verResultado.textContent = verResultado.textContent + botaoCinco.value;

 }

//BOTAO 6 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn6.addEventListener('click', Exibirbtn6);

function Exibirbtn6() {
   
   verResultado.textContent = verResultado.textContent + botaoSeis.value;

 }

//BOTAO 7 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn7.addEventListener('click', Exibirbtn7);

function Exibirbtn7() {
   
   verResultado.textContent = verResultado.textContent + botaoSete.value;

 }

//BOTAO 8 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn8.addEventListener('click', Exibirbtn8);

function Exibirbtn8() {
   
   verResultado.textContent = verResultado.textContent + botaoOito.value;

 }

//BOTAO 9 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn9.addEventListener('click', Exibirbtn9);

function Exibirbtn9() {
   
   verResultado.textContent = verResultado.textContent + botaoNove.value;

 }

//BOTAO 0 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
btn0.addEventListener('click', Exibirbtn0);

function Exibirbtn0() {
   
   verResultado.textContent = verResultado.textContent + botaoZero.value;

 }