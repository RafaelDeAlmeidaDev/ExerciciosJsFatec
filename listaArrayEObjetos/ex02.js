/* 2. Exercício de Pesquisa e Ordenação: 

   - Crie um array de 5 objetos contendo informações de produtos, com nome e preço. 

   - Utilize os métodos `filter` para encontrar os produtos com preço abaixo de 50 e `sort` para ordená-los por ordem crescente de preço.  */


   function valoresMenoresQ50(preco){
    return preco.preco < 50;
   }


let produtos = [
    {preco:23.40, nome: "fone de ouvido"},
    {preco:50.70, nome: "caixa de som"},
    {preco:200.00, nome: "mochila"},
    {preco:1.50, nome: "caneta"},
    {preco:21.60, nome: "caderno"},
]

let resultado = produtos.filter(valoresMenoresQ50);
console.log(resultado.sort((a, b)=> a.preco - b.preco));

