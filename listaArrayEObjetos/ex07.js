/*
7. Exercício de Ordenação e Redução: 

   - Crie um array de 5 objetos com informações de livros, incluindo título e número de páginas. 

   - Utilize `sort` para ordenar os livros pelo número de páginas em ordem decrescente e `reduce` para encontrar o livro com o maior número de páginas.
   */

   let livros = [
       {titulo:"Harry Potter e a Pedra Filosofal", numPaginas: 263,},
       {titulo:"George Orwell", numPaginas: 416,},
       {titulo:"A arte de ligar o fodase", numPaginas: 158,},
       {titulo:"O óbvio também precisa ser dito", numPaginas: 192,},
       {titulo:"Diário de um banana", numPaginas: 224,},
]

let maispgs;
let ordemDesc;

function maiorNumPg(a, b){
    return a.numPaginas > b.numPaginas ? a : b
 }

 maispgs = livros.reduce(maiorNumPg);
ordemDesc = livros.sort((a, b)=> b.numPaginas - a.numPaginas)


 console.log(maispgs);
console.log(ordemDesc);

