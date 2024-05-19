/*Faça um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir, para ler qual a condição de pagamento escolhida, e efetuar o cálculo adequado.

Código condição de pagamento:
1 - À vista no débito, recebe 10% de desconto;
2 - À vista no dinheiro ou Pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

//Declaração das variáveis

const precoEtiqueta = 100;
let FormaPagamento = 0;
let desconto = 0;
let valorPagar = 0;
let juros = 0;

//Criação da função que de acordo com a forma de pagamento, dá desconto ou acrescenta juros. 👇👇👇

function aplicarDescontoOuJuros (FormaPagamento, precoEtiqueta, desconto, juros) {
//Estrutura condicional com if/else.

    if (FormaPagamento === 1) {
        desconto = desconto;
        valorPagar = precoEtiqueta - (precoEtiqueta * (desconto/100));
        console.log(`Total a pagar R$: ${valorPagar.toFixed(2)}. `);
    }else if (FormaPagamento === 2){
        desconto = desconto;
        valorPagar = precoEtiqueta - (precoEtiqueta * (desconto/100));
        console.log(`Total a pagar R$: ${valorPagar.toFixed(2)}`)
    }else if (FormaPagamento === 3){
        valorPagar = precoEtiqueta / 2;
        console.log(`Parcelado em duas vezes de R$: ${valorPagar.toFixed(2)}`)
    }else {
        juros = juros;
        valorPagar = (precoEtiqueta + (precoEtiqueta * (juros/100))) / 3;
        console.log(`Valor total com juros de 10% R$: ${precoEtiqueta + (precoEtiqueta * (juros/100))}, parcelado em três vezes de R$: ${valorPagar.toFixed(2)}`);
    } 
    
}

//Invocando a função com todos os argumentos para teste.
 aplicarDescontoOuJuros(1, 100, 10, 0);
 aplicarDescontoOuJuros(2, 100, 15, 0);
 aplicarDescontoOuJuros(3,100, 0, 0);
 aplicarDescontoOuJuros(4, 100, 0, 10);



//Código com estrutura if/else if/else, antes da criação da função


/*if (FormaPagamento === 1) {
    desconto = 0.10;
    valorPagar = precoEtiqueta - (precoEtiqueta * desconto);
    console.log(`Total a pagar R$: ${valorPagar.toFixed(2)}. `);
}else if (FormaPagamento === 2){
    desconto = 0.15;
    valorPagar = precoEtiqueta - (precoEtiqueta * desconto);
    console.log(`Total a pagar R$: ${valorPagar.toFixed(2)}`)
}else if (FormaPagamento === 3){
    valorPagar = precoEtiqueta / 2;
    console.log(`Parcelado em duas vezes de R$: ${valorPagar.toFixed(2)}`)
}else {
    juros = 0.10;
    valorPagar = (precoEtiqueta + (precoEtiqueta * juros)) / 3;
    console.log(`Valor total com juros de 10% R$: ${precoEtiqueta + (precoEtiqueta * juros)}, parcelado em três vezes de R$: ${valorPagar.toFixed(2)}`);
} */
