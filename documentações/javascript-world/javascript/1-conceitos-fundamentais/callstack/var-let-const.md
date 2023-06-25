As diferenças entre var, let, e const em JavaScript têm a ver principalmente com o escopo da variável e se o valor da variável pode ser reatribuído.

Variáveis declaradas com var têm escopo de função, o que significa que elas estão disponíveis em toda a função em que foram declaradas. Se uma variável var é declarada fora de qualquer função, ela tem escopo global. Uma peculiaridade das variáveis var é que elas são "hoisted", o que significa que elas são tecnicamente declaradas no início da função, mesmo que a declaração var apareça mais tarde no código.

Variáveis declaradas com let e const têm escopo de bloco, o que significa que elas estão disponíveis apenas dentro do bloco de código (delimitado por {}) em que foram declaradas. Além disso, variáveis let e const não são hoisted como variáveis var.

A principal diferença entre let e const é que let permite a reatribuição, enquanto const não. Isso significa que uma vez que um valor tenha sido atribuído a uma variável const, esse valor não pode ser alterado. No entanto, isso só se aplica à reatribuição da variável em si, não a alterações dentro da variável se ela contiver um objeto ou array.

Em JavaScript, quando você atribui um valor a uma variável sem declará-la com uma dessas palavras-chave, essa variável é automaticamente colocada no escopo global.

``` javascript
function calculate() {
    sumTotal = 4 + 5;
    return subcractTwo(sumTotal)
}
```

Então, após a execução da função calculate, sumTotal permanece no escopo global e está acessível para ser usado mais tarde no código.