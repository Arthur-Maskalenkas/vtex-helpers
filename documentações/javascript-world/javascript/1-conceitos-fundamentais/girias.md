# Coersão de tipos
// !!{} utilizado - coersão implicita
// Boolean({}) - coersão explicita

# operação de tipos
!!{}

# Codigo fluente
É quando possui um statement por linha
```javascript
const any = teste.aMethod()
.function2()
.function3()
```


# funções explicitas
* internamente objetos literais viram funções explicitas
String()
Boolean()
Number()
Array()

# assinatura de classe
Seriam os nome de metodos presentes da classe apenas, não a funcionalidade

# method chaining
Encadeamento de funções

# dependency injection
A Dependency Injection é uma técnica que permite a inversão de controle das dependências de uma classe, transferindo a responsabilidade de criar e gerenciar as dependências para um componente externo. Isso ajuda a reduzir o acoplamento entre os componentes e a tornar o código mais flexível e test ável.


# Pattern Fluent Interface ou Fluent API
O fluent interface é desenhado para chamar as suas funções no method chaining (encadeamento de funções), e é como se vc tivesse falando o que cada passo faz.

Basicamente ele serve para construir fluxos complexos e sequenciais que podem executar muitos passos, identico a um PIPELINE. A diferença de um Builder é que ele não retorna a instancia de um objeto, e sim faz determinados passos

```javascript
const anyResult = anyObject
  .method1()
  .method2()
  .build()
```

Como ele gera muitos passos, para evitar replicação de codigo toda vez que for instanciar um objeto, é utilizado o Facade Pattern

# Pattern Facade
O pattern facade abstrai toda a complexidade das chamadas dos method chaining

Abstrai toda a complexidade da classe FluentApi.

```javascript
class TextProcessadorFacade {
  #textProcessadorFluentAPI


  constructor(text) {
    this.#textProcessadorFluentAPI = new TextProcessorFluentAPI(text)
  }


  getPeopleFromPDF() {
    return this.#textProcessadorFluentAPI
      .method1()
      .method2()
      .build()
  }
}
```

Quem precisar utilizar a nossa sequencia de processos, vai usar o facade

```javascript
const instance = new TextProcessorFacade(data.text)
```