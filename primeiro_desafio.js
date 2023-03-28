//calculo_de_combustivel.js
/*faça o programa para calcular o gasto de uma viagem .
você tera 3 variaveis .
sendo elas :
1 - preço do combustivel.
2 - gadto medio dde combustivel do carro por km .
3 - distancia em km da viagem.

imprima no console o valor que ser gasto de combustivel para realizar essa viagem.  
*/
/*entradas*/
const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;
/*logica*/
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos*precoCombustivel
console.log(valorGasto.toFixed(2));