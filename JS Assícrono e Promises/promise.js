''
let aceitar = false;
console.log('pedir uber');
const promessa = new Promise((resolve, reject) => {
  if (aceitar) return resolve('carro chegou');

  return reject('pedido negado');
});

console.log('Aguardando');
promessa
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('finalizando'));
