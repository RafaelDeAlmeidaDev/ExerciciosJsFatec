/* 
3. Exercício de Modificação: 
    - Crie um array de 5 strings contendo nomes de frutas. 

   - Utilize os métodos `map` para adicionar "deliciosa" na frente de cada nome de fruta e `join` para transformar a matriz em uma única string separada por vírgulas.
*/

let frutas = ["Melância", "Uva", "Maçã", "Pitaya", "Banana"];

function modificaTexto(nome){
    return "deliciosa " + nome;
}

let textoFrutas = frutas.map(modificaTexto);
console.log(textoFrutas.join(", "));