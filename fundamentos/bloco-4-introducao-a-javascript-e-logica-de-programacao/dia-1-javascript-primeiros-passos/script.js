/////////////////BLOCO 4.1/////////////////////////////////
//5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = ;

for (var i = 0 ;i < numbers.length; i++){
    if(numbers[i] > maior){
    maior = numbers[i];
}
}
console.log(maior);

//6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (var i = 0 ;i < numbers.length; i++){
    if(numbers[i] % 2 === 1){
    contador++;
    }
    
    }
    if(contador ===0){
        console.log("nenhum valor ímpar encontrado");
    }
    else{
        console.log(contador);   
    }

    //7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (var i = 0 ;i < numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i];
}
}
console.log(menor);
////////////////////BLOCO 4.2//////////////////////////////////
//exe 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
 
//exer 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (var i = 0; i < numbers.length; i++){
    soma = (numbers[i] +soma);
}
console.log(soma);
 
//exe 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (var i = 0; i < numbers.length; i++){
    soma = (numbers[i] +soma);
}
console.log(soma/i);
 
//exe 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (var i = 0; i < numbers.length; i++){
    soma = (numbers[i] + soma);
}
 
 
if (soma / i >= 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}
 
// exe 5
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (var i = 0; i < numbers.length; i++)
    if (numbers[i] >= maior) {
        maior = numbers[i];
    }
console.log(maior);
 
//exe 6 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar ;
for (var i = 0; i < numbers.length; i++){
    if (numbers[i] % 2) {
        impar = numbers[i];
    }
}
console.log(impar);
 
 
// exe 5
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers  [0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);
 
 
let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (var i = 0; i < fruits.length; i+= 1){
    soma = (fruits[i] + soma);
}
if (soma > 15) {
    console.log(soma);
}
else {
    console.log("valor menor que 16")
}
 
//EXERCICIO DA AULA
const n = 9 ;
let resultado = 100;
for (let i = 0; i <= n; i += 1){
    resultado = resultado - i;
}
console.log(resultado);
 
//////////////////////////BLOCO 4.3/////////////////////////////
//EXE 1 FATORIAL
let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i <= fatorial; i += 1) {
    resultado = resultado * i;
}
console.log(resultado);
 
 
//EXE 2 INVERTER STRING
function inverterString(txt) {
    let o = '';
    for (let i = txt.length - 1; i >= 0; i -= 1) {
        o += txt[i];
    }
    return o;
}
console.log(inverterString("Trybe"));
 
//EXE 3 MENOR VALOR
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array  [0];
for (var i = 0; i < array.length; i++) {
    if (array[i] < menor) {
        menor = array[i];
    }
}
console.log(menor);
 
//EXE 4 Maior numero primo
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
}
console.log(isPrime(47));



/////////// COPIA DO GABARITO exe 4

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

