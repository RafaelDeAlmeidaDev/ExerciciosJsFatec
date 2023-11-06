/*
 6. Exercício de Transformação e Pesquisa: 

   - Crie um array de 5 números chamado `dados` com valores aleatórios. 

   - Utilize `map` para elevar ao quadrado todos os valores e, em seguida, `indexOf` para encontrar a posição do último número menor que 25 após a transformação. 
*/

let dados = [23, 3, 5, 7, 2];
let dadosElevadoAoQuadrado = [];


function ElementAoQuadrado(num){
    return num ** 2;
  }


dadosElevadoAoQuadrado = dados.map(ElementAoQuadrado);


console.log(dadosElevadoAoQuadrado);
