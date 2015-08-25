/**
 * $compose
 * 
 * Fazer composição de funções é criar uma chamada de um conjunto de funções,
 * chamando a função seguinte, com resultados da função anterior
 * 
 * @module $compose
 * @author Cleber de Moraes Gonçalves
 * @example
 * 
 *        $map([1, 2, 3], $compose($add(1), $add(2)));
 *
 */
Ninja.module('$compose', ['$curry'], function ($curry) {
  
  /**
   * Fazer composição de funções é criar uma chamada de um conjunto de funções,
   * chamando a função seguinte, com resultados da função anterior
   * 
   * @public
   * @method $compose
   * @param {Function} b Segunda funcao a ser executado
   * @param {Function} a Primeira funcao a ser executada
   * @return {Function} Funcao que recebe o valor que sera passado a funcao a e b
   * @example
   * 
   *        $map([1, 2, 3], $compose($add(1), $add(2)));
   * 
   */
  function compose(b, a) {
    return function (x) { return b(a(x)); }
  }
  
  /**
   * Revelacao do servico $apply, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(compose);
  
})
