/* 
8. Exercício de Modificação e Filtragem: 

 - Crie um array de 5 strings contendo nomes de cores. 

  - Utilize `map` para tornar todas as cores maiúsculas e `filter` para encontrar as cores que começam com a letra "B" (utilize o método .startsWith( )). 
*/

let cores = ["Azul", "Rosa", "Vermelho", "Preto", "Branco"];

function transformarEmMaiuscula(cor){
 return cor.toUpperCase();
}

let nomeMaiusculo = cores.map(transformarEmMaiuscula);
let coresComB = cores.filter((cor)=> cor.startsWith("B"));
console.log(nomeMaiusculo);
console.log(`As cores que comçam com B, são: ${coresComB}`);