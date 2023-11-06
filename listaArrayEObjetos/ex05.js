/*
5. Exercício de Redução e Pesquisa: 

- Crie um array de objetos com informações de cidades, incluindo nome e população.  

- Use reduce para encontrar a cidade com a maior população; 

- Encontrar a(s) cidade(s) com nome começando com a letra "S". 
*/

 let cidades = [
     {nome: "Rio de Janeiro", populacao: 6211423},
     {nome: "São Paulo", populacao: 11451245},
    {nome: "Curitibq", populacao: 1773733},
    {nome: "Florianópolis", populacao: 537213},
    {nome: "Jales", populacao: 49201},
    {nome: "Fernandópolis", populacao: 69402},
 ]

 function maiorPopulacao(a, b){
    return a.populacao > b.populacao ? a : b
 }

 let cidadaMaispopulosa = cidades.reduce(maiorPopulacao);
 let cidadesComS = cidades.filter((cid)=> cid.nome.startsWith("S"));


 console.log(cidadaMaispopulosa);
 console.log(cidadesComS);