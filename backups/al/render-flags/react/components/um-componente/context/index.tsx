import React, { createContext, useEffect, useMemo, useContext } from 'react'
import {
  UmComponenteUseContextValues,
  UmComponenteSiteEditorValues,
} from './_interfaces'

import { MOCK_USE_CONTEXT_VALUES } from "./_mocks/mock-states";

//
// ** Criando O Contexto **
//
export const UmComponenteContext = createContext < UmComponenteUseContextValues > (
  MOCK_USE_CONTEXT_VALUES
)


//
// ** Disponibilizando os valores aos filhos por meio do provider **
//
const UmComponenteProvider = (props: UmComponenteSiteEditorValues & { children: React.ReactNode }) => {
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
    <UmComponenteContext.Provider value={{ getQuantityProducts }}>
      {props.children}
    </UmComponenteContext.Provider >
  )
}

UmComponenteProvider.schema = {
  title: 'Configurações Contexto UmComponente',
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

export const useUmComponenteContext = () => useContext(UmComponenteContext)
export default UmComponenteProvider