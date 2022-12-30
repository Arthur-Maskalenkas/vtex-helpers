# Navegação
* [🛡️ 1.0 Sobre O Projeto](#🛡️-10-sobre-o-projeto)
  * [📑 1.0 Qual a finalidade do projeto?](#📑-10-qual-a-finalidade-do-projeto)
  * [📑 1.1 Instalação](#📑-11-instalação)
  * [📑 1.2 Como Rodar O Gerador](#📑-12-como-rodar-o-gerador)
  * [📑 1.3 Ideias Para Evolução Do Projeto](#📑-13-ideias-para-evoluir-o-projeto)
  * [📑 1.4 Como Contribuir](#📑-14-como-contribuir)
* [ 🧰 1.0 Gerador De Componentes](#🧰-10-gerador-de-componentes)
  * [📌 1.0. Estrutura Gerada Por Padrão](#📌-10-estrutura-que-será-gerada-por-padrão)
  * [📌 1.1. Opções Do Gerador](#📌-11-opções-do-gerador)
    * [📑 1.0. Nome Do Componente](#📑-10-nome-do-componente)
    * [📑 1.1. Opções De Funcionalidades](#📑-11-opções-de-funcionalidades)
      * [🧪 1.0. CSS](#🧪-10-css)
      * [🧪 1.1. Props](#🧪-11-props)
      * [🧪 1.2. Children](#🧪-12-children)
      * [🧪 1.3. Contexto Próprio](#🧪-13-contexto-próprio)
      * [🧪 1.4. Contexto De Produto](#🧪-14-contexto-de-produto)
      * [🧪 1.5. Chamada Api](#🧪-15-chamada-api)
      * [🧪 1.6. Pagina Própria](#🧪-16-pagina-própria)
# 🛡️ 1.0. Sobre O Projeto
>## 📑 1.0. Qual a finalidade do projeto?
O objetivo é facilitar a criação da estrutura de coisas repetitivas, com base em templates pré-definidos, para que o desenvolvedor possa se concentrar em desenvolver a ideia em si, sem se preocupar com a estrutura de pastas e arquivos.

Utilizando um gerador você não vai se preocupar com:
- Adição de dependencias no manifest.json
- Adição de dependencias no package.json
- Criação de pastas e arquivos

O seu trabalho vai ser rodar um comando e começar a desenvolver.

---

>## 📑 1.1. Instalação
Simplesmente rode yarn na pasta /store-theme para instalar as dependencias do projeto.

```bash
yarn
```

---

>## 📑 1.2. Como Rodar O Gerador
Para inicializar a geração de qualquer coisa, rode o comando generate:

```bash
yarn generate
```

---

>## 📑 1.3. Ideias Para Evolução Do Projeto
* Implementar um gerador de paginas - 🟡 - em desenvolvimento
* Implementar um gerador de componentes de outras lojas - 🟡 - em desenvolvimento
* Implementar um gerador de utilitários - 🔴 - não implementado
* Implementar um gerador de commons - 🔴 - não implementado
* Implementar opção de gerar contexto sem estado - 🔴 - não implementado
* Implementar opção de gerar contexto com estado - 🔴 - não implementado
* Implementar opção de gerar contexto com reducers - 🔴 - não implementado
* Implmenetar opção de gerar contexto global - 🔴 - não implementado
* Implementar opção de gerar contexto de pagina - 🔴 - não implementado
* ... e muito mais

> ## 📑 1.4. Como Contribuir

Para contribuir com o projeto, basta seguir os passos abaixo:

1. Crie uma branch com a sua feature: `git checkout -b feat/generator-my-feature`
2. Abra um pull request

Depois desses 2 passos, você fará varios devs felizes.

---

 # 🧰 1.0. Gerador De Componentes

* [📌 1.0. Estrutura Gerada Por Padrão](#📌-10-estrutura-que-será-gerada-por-padrão)
* [📌 1.1. Opções Do Gerador](#📌-11-opções-do-gerador)
  * [📑 1.0. Nome Do Componente](#📑-10-nome-do-componente)
  * [📑 1.1. Opções De Funcionalidades](#📑-11-opções-de-funcionalidades)
    * [🧪 1.0. CSS](#🧪-10-css)
    * [🧪 1.1. Props](#🧪-11-props)
    * [🧪 1.2. Children](#🧪-12-children)
    * [🧪 1.3. Contexto Próprio](#🧪-13-contexto-próprio)
    * [🧪 1.4. Contexto De Produto](#🧪-14-contexto-de-produto)
    * [🧪 1.5. Chamada Api](#🧪-15-chamada-api)
    * [🧪 1.6. Pagina Própria](#🧪-16-pagina-própria)

> # 📌 1.0. Estrutura que será gerada por padrão

Caso você crie um componente sem passar nenhuma opção, com o nome de "meu componente", a estrutura será gerada da seguinte forma:

### **Arquivos gerados em store-theme/react/components icone**
* A pasta do componente será gerada em store-theme/react/components/meu-componente
* O arquivo index.tsx será gerado em store-theme/react/components/meu-componente/index.tsx
* O nome do componente exportado será MeuComponente

### **Arquivos gerados em store-theme/react**
* O arquivo de exportação default do componente será gerada em store/theme/react/MeuComponente.tsx
* O nome do componente exportado por default será MeuComponente

### **Arquivos gerados em store-theme/store**
* interface app-meu-componente será incluida

### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo
    │   │       └── index.tsx ✔️
    │   └── ComponenteExemplo.tsx ✔️
    └── store
        └── interfaces.json ♻️
```

>### 🗄️  **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'

export const MeuComponente = () => {

  return (
    <div>
      meu-componente
    </div>
  )
}
```

>### 🗄️ **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️ **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  },
```
<br>

> # 📌 1.1. Opções Do Gerador

Atualmente, ao selecionar a opção de gerar componente, são apresentadas as seguintes perguntas com as seguintes opções:

* [Nome Do Componente](#nome-do-componente)
* [Opções De Funcionalidades Disponiveis](#opções-de-funcionalidades)

## 📑 1.0. Nome Do Componente

**O nome é a única informação obrigatória para a criação de um componente.** O nome vai ser refletido em todos os arquivos criados. Tanto na criação da pasta quanto no nome do componente.

Caso você digite "Meu Componente" ou "meu componente" ou "MEU COMPONENTE", em algumas partes o nome será meu-componente, em outras MeuComponente. Independente de qual nome você coloque, o gerador vai manipular o nome e o resultado será o mesmo.

<br>

## 📑 1.1. Opções De Funcionalidades

Atualmente, existem 7 opções de funcionalidades ao gerar um componente, sendo elas:
  * [🧪 1.0. CSS](#🧪-10-css)
    * Criará um componente com css totalmente formatado.
  * [🧪 1.1. Props](#🧪-11-props)
    * Criará um componente que recebe props.
  * [🧪 1.2. Children](#🧪-12-children)
    * Criará um componente que recebe children.
  * [🧪 1.3. Contexto Próprio](#🧪-13-contexto-próprio)
    * Criará um contexto com schema e um componente pronto para utilizar esse contexto criado.
  * [🧪 1.4. Contexto De Produto](#🧪-14-contexto-de-produto)
    * Criará um componente pronto para utilizar o contexto de produto disponibilizado pela VTEX.
  * [🧪 1.5. Chamada Api](#🧪-15-chamada-api)
    * Criará um componente pronto para fazer qualquer chamada de api rest.
  * [🧪 1.6. Pagina Própria](#🧪-16-pagina-própria)
    * Criará um componente e gerará uma página para ele.

---
# ⚠️ Atenção
 ### Em todos os testes a seguir vai ser gerado um componente chamado `componente exemplo` com a devidá opção que esta presente no título do teste.

Ou seja, se você quiser testar a opção de `CSS` igual a documentação, você deve  rodar o comando 

```bash
yarn generate
```

Digitar 'componente exemplo'  e selecionar a opção de CSS.

 ### Na geração de arquivos será utilizada as seguintes legendas:
* ✔️  O arquivo/pasta foi criado
* ♻️  O arquivo/pasta foi modificado

---
## 🧪 1.0. CSS


### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/components/componente-exemplo/styles.css
  * Arquivo css reset é gerado.
* react/components/componente-exemplo/index.tsx
  * componente-exemplo importa e utiliza o arquivo css gerado.

<br>


### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo
    │   │       ├── index.tsx ✔️
    │   │       └── styles.css ✔️
    │   └── ComponenteExemplo.tsx ✔️
    └── store
        └── interfaces.json ♻️
```

>### 🗄️ **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'
import styles from './styles.css'

export const ComponenteExemplo = () => {

  return (
    <div className={styles.containerComponenteExemplo }>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️ **react/components/componente-exemplo/styles.css**
```css
.containerComponenteExemplo,
.containerComponenteExemplo * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.containerComponenteExemplo ul,li {
  list-style: none;
}

.containerComponenteExemplo a {
  text-decoration: none;
}

.containerComponenteExemplo button {
  border: none;
  background: none;
  cursor: pointer;
}
```

>### 🗄️ **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️ **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  },
```

---

## 🧪 1.1. Props
### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/components/componente-exemplo/index.tsx
  * componente-exemplo utilizara uma interface chamada ComponenteExemploProps para receber as props do componente.

<br>


### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo
    │   │       └── index.tsx ✔️
    │   └── ComponenteExemplo.tsx ✔️
    └── store
        └── interfaces.json ♻️
```

>### 🗄️  **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'

export type ComponenteExemploProps = {
  propsAleatoria: any
}

export const ComponenteExemplo = ({ propsAleatoria }: ComponenteExemploProps) => {

  console.log('props recebidas no componente!', propsAleatoria)

  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️  **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️   **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  },
```
---
## 🧪 1.2. Children

### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/components/componente-exemplo/index.tsx
  * componente-exemplo utilizara uma interface chamada ComponenteExemploProps para receber as props do componente, e nessas props estará recebendo um children.
* store/interfaces.json
  * componente-exemplo implementa um composition para receber um children.

<br>



### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo
    │   │       └── index.tsx ✔️
    │   └── ComponenteExemplo.tsx ✔️
    └── store
        └── interfaces.json ♻️
```

>### 🗄️  **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'

export type ComponenteExemploProps = {
  children: React.ReactNode
}

export const ComponenteExemplo = ({ children }: ComponenteExemploProps) => {

  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️  **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️   **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "composition": "children",
    "component": "ComponenteExemplo"
  },
```
---


## 🧪 1.3. Contexto próprio	

### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/Componenents/componente-exemplo/context/index.tsx
  * Exporta o useComponenteExemploContext e ComponenteExemploProvider.
  * Gera um schema para manipular o contexto através do site-editor
* react/components/componente-exemplo/context/_interfaces/**
  * Estrutura para tipar o contexto/estado do contexto/estado do site-editor
* react/components/componente-exemplo/context/_mocks/**
  * Estrutura para mokar o contexto/estados
* react/components/componente-exemplo/index.tsx
  * componente-exemplo utilizará o useContextComponenteExemplo
* react/store/interfaces.json
  * componente-exemplo será interligado ao contexto utilizando a propriedade "around" e o nome do contexto


<br>


### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo 
    │   │       ├── context
    │   │       │   ├── _interfaces
    │   │       │   │   ├── _context.ts ✔️
    │   │       │   │   ├── _schemas.ts ✔️
    │   │       │   │   └── index.ts ✔️
    │   │       │   ├── _mocks
    │   │       │   │   └── mock-states.ts ✔️
    │   │       │   └── index.tsx ✔️
    │   │       └── index.tsx ✔️
    │   ├── ComponenteExemplo.tsx ✔️
    │   └── ComponenteExemploProvider.tsx ✔️
    └── store
        └── interfaces.json ♻️
```

>### 🗄️  **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'
import {useComponenteExemploContext} from "./context";

export const ComponenteExemplo = () => {
  const { getQuantityProducts } = useComponenteExemploContext()
  console.log('contexto sendo consumido pelo componente!', getQuantityProducts)

  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️  **react/Componenents/componente-exemplo/context/index.tsx**
```tsx
import React, { createContext, useEffect, useMemo, useContext } from 'react'
import {
  ComponenteExemploUseContextValues,
  ComponenteExemploSiteEditorValues,
} from './_interfaces'

import { MOCK_USE_CONTEXT_VALUES } from "./_mocks/mock-states";

//
// ** Criando O Contexto **
//
export const ComponenteExemploContext = createContext < ComponenteExemploUseContextValues > (
  MOCK_USE_CONTEXT_VALUES
)


//
// ** Disponibilizando os valores aos filhos por meio do provider **
//
const ComponenteExemploProvider = (props: ComponenteExemploSiteEditorValues & { children: React.ReactNode }) => {
  const [quantityProducts, setQuantityProducts] = React.useState<number>(0)

  console.log('data vindo do site editor recebidas com sucesso pelo provider!', props)

  //
  // ** Funções para serem executadas pelos filhos **
  //
  const getQuantityProducts = useMemo(() => quantityProducts, [quantityProducts])

  useEffect(() => {
    setQuantityProducts(props.products?.length)
  }, [props.products])

  // ** Retornando o contexto, com todas as funções/valores que serão disponibilizados aos filhos **
  return (
    <ComponenteExemploContext.Provider value={{ getQuantityProducts }}>
      {props.children}
    </ComponenteExemploContext.Provider >
  )
}

ComponenteExemploProvider.schema = {
  title: 'Configurações Contexto ComponenteExemplo',
  description: "Um contexto basico para testes. Tudo o que for passado aqui será disponibilizado ao contexto, que consequentemente disponibilizará aos filhos.",
  type: 'object',
  properties: {
    products: {
      title: 'Produtos',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            title: 'Nome',
            type: 'string',
          },
          price: {
            title: 'Preço',
            type: 'number',
          },
        },
      },
    },
  },
}

export const useComponenteExemploContext = () => useContext(ComponenteExemploContext)
export default ComponenteExemploProvider
```

>### 🗄️  **react/components/componente-exemplo/context/_mocks/**mock-states.ts
```tsx
import { ComponenteExemploUseContextValues } from "../_interfaces";

export const MOCK_USE_CONTEXT_VALUES: ComponenteExemploUseContextValues = {
  getQuantityProducts: 0
}
```

>### 🗄️  **react/components/componente-exemplo/context/_interfaces/**_context.ts
```tsx
import {schema_product} from "./_schemas";

//
// ** Tipos de valores em que o useState do contexto vai possuir **
//
export type ComponenteExemploContextUseState = {
  quantityProduct: number
}

//
// ** Tipos de valores em que o site-editor vai possuir na raiz do objeto (root). **
//
// ** Todos os tipos desses objetos presentes nas raizes devem ser colocados em ./_schemas **
//
export type ComponenteExemploSiteEditorValues = {
  products: schema_product[]
}

//
// ** Tipos de valores em que o useComponenteExemploContext() vai possuir **
//
export type ComponenteExemploUseContextValues = {
  getQuantityProducts: number
}
```

>### 🗄️  **react/components/componente-exemplo/context/_interfaces/**_schemas.ts
```tsx
//
// ** types dos objetos que o site editor vai utilizar **
//
export interface schema_product {
  price: number
  name: string
}

```

>### 🗄️  **react/components/componente-exemplo/context/_interfaces/**index.ts
```tsx
export * from './_context'

export * from './_schemas'
```

>### 🗄️  **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️  **react/ComponenteExemploProvider.tsx**
```tsx
import ComponenteExemploProvider from "./components/componente-exemplo/context"

export default ComponenteExemploProvider
```

>### 🗄️  **react/store/interfaces.json**
```json
{
  "app-componente-exemplo": {
    "component": "ComponenteExemplo",
    "around": [
      "context-componente-exemplo"
    ]
  },

  "context-componente-exemplo": {
    "component": "ComponenteExemploProvider"
  },
}
```
---
## 🧪 1.4. Contexto de produto

### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/components/componente-exemplo/index.tsx
  * componente-exemplo implementa o contexto do useProduct 100% tipado
* react/typings/vtex.product-context.d.ts
  * cria o type do useProduto caso não exista

<br>


### 📂 ESTRUTURA DE PASTAS

```bash
.
└── store-theme
    ├── react
    │   ├── components
    │   │   └── componente-exemplo 
    │   │       └── index.tsx ✔️
    │   └── typings
    │       └── vtex.product-context.d.ts ✔️
    └── store
        └── interfaces.json
```

>### 🗄️  **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import useProduct from "vtex.product-context/useProduct";

export const ComponenteExemplo = () => {
  const productCtx:ProductContextState = useProduct();
  console.log('Contexto de produto consumido no componente!', productCtx);

  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️ **react/typings/vtex.product-context.d.ts**
```tsx
  declare module 'vtex.product-context/useProduct'
```

>### 🗄️  **store/interfaces.json**
```json
{
   "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  }
}
```

---

## 🧪 1.5. Chamada Api
### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* react/components/componente-exemplo/index.tsx
  * componente-exemplo importa e utiliza um useEffect para fazer uma chamada a api

<br>


### 📂 ESTRUTURA DE PASTAS
```bash
.
└── store-theme
    ├── react
    │   └── components
    │       └── componente-exemplo
    │           └── index.tsx✔️
    └── store
        └── interfaces.json♻️
```

>### 🗄️ **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'

export const ComponenteExemplo = () => {

  React.useEffect(() => {
    const getApi = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();

      console.log('api consumida no componente!', data)
    } catch (e) {
      console.log('erro ao consumir api no componente!', e)
    }
  }

  getApi();
  }, []);


  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️ **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️ **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  },
```

---

## 🧪 1.6. Pagina Própria

### 🛠️ ARQUIVOS GERADOS E MODIFICADOS
* store/routes.json
  * Gerando uma pagina custom com o nome "store.custom#page-app-componente-exemplo" e rota /componente-exemplo
* store/blocks/pages/app/component-exemplo/container-page.json
  * Referenciando a rota criada e criando um container em volta do app componente-exemplo

```bash
.
└── store-theme
    ├── store
    │   ├── blocks
    │   │   └── pages
    │   │       └── app
    │   │           └── componente-exemplo
    │   │               └── container-page.json
    │   ├── interfaces.json
    │   └── routes.json
    └── react
        └── components
            └── componente-exemplo
                └── index.tsx
```


>### 🗄️ **react/components/componente-exemplo/index.tsx**
```tsx
import React from 'react'

export const ComponenteExemplo = () => {

  return (
    <div>
      componente-exemplo
    </div>
  )
}
```

>### 🗄️ **react/ComponenteExemplo.tsx**
```tsx
import { ComponenteExemplo } from "./components/componente-exemplo";

export default ComponenteExemplo;
```

>### 🗄️ **store/interfaces.json**
```json
  "app-componente-exemplo": {
    "component": "ComponenteExemplo"
  },
```

>### 🗄️ **store/routes.json**
```json
{
  "store.custom#page-app-componente-exemplo": {
    "path": "/componente-exemplo"
  }
}
```

>### 🗄️ **store/blocks/pages/app/componente-exemplo/container-page.json**
```json
{
  {
  "store.custom#page-app-componente-exemplo": {
    "blocks": [
      "flex-layout.row#container-page-app--componente-exemplo"
    ]
  },

  "flex-layout.row#container--page--app--componente-exemplo": {
    "props": {
      "blockClass": [
        "container__page--app--componente-exemplo-row",
        "container__page--app-row",
        "container__page-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "children": [
      "flex-layout.col#container--page--app--componente-exemplo"
    ]
  },

  "flex-layout.col#container--page--app--componente-exemplo": {
    "props": {
      "blockClass": [
        "container__page--app--componente-exemplo-col",
        "container__page--app-col",
        "container__page-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "children": [
      "app-componente-exemplo"
    ]
  }
}
}
```

---