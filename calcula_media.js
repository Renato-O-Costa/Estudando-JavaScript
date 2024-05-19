//Algoritmo para calcular média a partir de três notas

let nota1 = 3;
let nota2 = 5;
let nota3 = 5;

const mediaFinal = (nota1 + nota2 + nota3) / 3;
let situacao = "";

console.log(`Média final: ${mediaFinal.toFixed(2)}.`);

if (mediaFinal >= 7) {
  situacao = "Aluno(a) aprovado!";
} else if (mediaFinal >= 5 && mediaFinal < 7) {
  situacao = "Aluno(a) em recuperação!";
} else {
  situacao = "Aluno(a) reprovado!";
}

console.log(`Situação do aluno(a) no semestre: ${situacao} Média final ${mediaFinal.toFixed(2)}.`);
