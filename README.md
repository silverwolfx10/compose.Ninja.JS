### $compose

Fazer composição de funções é criar uma chamada de um conjunto de funções, chamando a função seguinte, com resultados da função anterior a funcao curry

```javascript
this.Ninja(['$add', '$compose', '$map'], function ($add, $compose, $map) {
  console.log($map([1, 2, 3], $compose($add(1), $add(2))));
});
```
