/*
  A função average recebe um myarray (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um myarray vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um myarray. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const average = (myArray) => {
    // implementação aqui
    let sum = 0;
    let myAverage = 0;
    if (myArray.length === 0) {
      return undefined;
    }
    for (let key = 0; key < myArray.length; key += 1) {
      const elemento = myArray[key];
      if (typeof elemento !== 'number') {
        return undefined;
      }
      sum += elemento;
    }
    //acumula o array para retornar o valor
    myAverage = soma / myArray.length;
    return Math.round(myAverage);
  };

module.exports = average;
