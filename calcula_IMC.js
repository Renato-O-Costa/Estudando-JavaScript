//Algoritmo que calcula o  índice de massa corporal (IMC) de uma pessoa, e mostra sua condição de peso.

let peso = 65;
let altura = 1.70;
let calculaImc = peso / (altura ** 2);

if (calculaImc <  18.5){
    console.log(`Seu IMC é: ${calculaImc.toFixed(2)}. Abaixo do peso.`);
}else if (calculaImc >= 18.5 && calculaImc <= 25){
    console.log(`Seu IMC é ${calculaImc.toFixed(2)}. Peso normal.`);
}else if (calculaImc > 25 && calculaImc < 30){
    console.log(`Seu IMC é ${calculaImc.toFixed(2)}. Acima do peso.`);
}else if (calculaImc >= 30 && calculaImc < 40){
    console.log(`Seu IMC é ${calculaImc.toFixed(2)}. Obeso.`);
}else{
    console.log(`Seu IMC é ${calculaImc.toFixed(2)}. Obesidade grave.`);
}
console.log("Pratique sempre exercícios físicos para manter sua saúde bem!🏃‍♂️🏃‍♂️🏃‍♂️");
