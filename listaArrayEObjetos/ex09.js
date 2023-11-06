/*
9. Exercício de Pesquisa e Transformação: 

   - Crie um array de 5 objetos contendo informações de alunos, incluindo nome, idade e nota. 

   - Utilize `reduce` para encontrar o aluno com a nota mais alta e `map` para adicionar "Aprovado" ou "Reprovado" com base em uma nota de corte de 7. 
 */

let alunos = [
    {nome: "Lucas", idade: 22, nota: 7.7},
    {nome: "Rogério", idade: 38, nota: 6.5},
    {nome: "Kátia", idade: 40, nota: 8.6},
    {nome: "Eliezer", idade: 30, nota: 7.8},
    {nome: "Ariany", idade: 21, nota: 8.0},
]

let aprovados;
let notaMaior;

function Aprovacao(nota){
    if (nota.nota >= 7) {
        return nota.status = "aprovado"
    }else{
        return nota.status = "Terá que fazer a sub"
    }
}

function AchamaiorNota(a, b){
    return a.nota > b.nota ? a : b
}

aprovados = alunos.map(Aprovacao);
notaMaior = alunos.reduce(AchamaiorNota);
console.log(aprovados);
console.log(notaMaior);