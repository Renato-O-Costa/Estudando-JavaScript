let precoGasolina = 6.66;
let precoEtanol = 5.79;
let kmLitro = 10;
let distanciaViagem = 100;
let tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
  const precoTotal = (precoEtanol / kmLitro) * distanciaViagem;
  console.log(`Valor do custo total da viagem com Etanol.\n R$ ${precoTotal.toFixed(2)}.`);
} else {
    const precoTotal = (precoGasolina / kmLitro) * distanciaViagem;
    console.log(`Valor do custo total da viagem com Gasolina.\n R$ ${precoTotal.toFixed(2)}.`);
}
