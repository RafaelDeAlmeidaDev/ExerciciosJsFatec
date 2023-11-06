/* 
    10. Exercício de Filtragem e Transformação: 

    - Crie um array de números chamado `dados` com valores mistos (número e strings). 

    - Utilize `filter` para encontrar os números pares e `map` para multiplicá-los por 2. 
*/


let dados = ["asçldk", 23, 2.2, 4, ""];
let pares = [];
let dobro;
function numPares(num){
    return num % 2 === 0;
}
function multPor2(num){
    return num * 2;
}

pares = dados.filter(numPares);
dobro = pares.map(multPor2);
console.log(pares);
console.log(dobro);