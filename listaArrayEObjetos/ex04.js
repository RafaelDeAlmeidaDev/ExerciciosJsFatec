/*
4. Exercício de Filtragem e Redução: 

   - Crie um array de 5 números chamado `notas` representando notas de estudantes. 

   - Utilize `filter` para encontrar as notas maiores ou iguais a 7 e `reduce` para calcular a média dessas notas. 
   */

   let notas = [5, 7.8, 8.5, 3.9, 10.0];

   function notasNaMedia(num){
    return num >= 7;
   }

   function SomaElment(a, b){
     return a + b;
   }

   let resultado = notas.filter(notasNaMedia);
   let soma = resultado.reduce(SomaElment,);

   console.log((soma / resultado.length).toFixed(2));

