import {ShoppingGuideContextProps, ShoppingGuideContextValuesDefault} from './_interfaces/_context'

import {createContext, useContext} from 'react'

//
// ** Criando O Contexto **
//
export const ShoppingGuideContext = createContext<ShoppingGuideContextProps>(
	ShoppingGuideContextValuesDefault
)

//
// ** Utilizando o contexto **
//
const useShoppingGuideContext = () => useContext(ShoppingGuideContext)

export {
	useShoppingGuideContext
}