/* 1. Exercício de Transformação e Redução: 

   - Crie um array de 5 números chamado `valores` com valores de 1 a 5. 

   - Utilize os métodos `map`, `filter` e `reduce` para encontrar a soma dos quadrados dos números pares em `valores`.  */
   let valores = [1, 2, 3, 4,5, 6];


/* função que vou usar o map para fazer um novo array utilizando os elementos de let valores
 elevado ao quadrado*/

 function ElementAoQuadrado(num){
   return num ** 2;
 }


 /* filtrar somente os elementos pares e colocar em um novo array usando o filter */
 function elemntosPares(num){
   return (num % 2 == 0); 
 }


 //soma todos os valores, somente depois de descubrir o valor ao quadrado. Isso será feito com reduce
 function somaValoresDaExp(a, b){
  return a+b;
 }

 
 let resultado = valores.filter(elemntosPares).map(ElementAoQuadrado).reduce(somaValoresDaExp);

 console.log(resultado);


 /* 
 Jeito 2
 // Crie um array de 5 números de 1 a 5.
let valores = [1, 2, 3, 4, 5];

// Use map para elevar os elementos ao quadrado.
let quadrados = valores.map(num => num ** 2);

// Use filter para encontrar os números pares.
let pares = quadrados.filter(num => num % 2 === 0);

// Use reduce para somar os números pares.
let resultado = pares.reduce((a, b) => a + b, 0);

console.log(resultado);
 */