import {schema_product} from "./_schemas";

//
// ** Tipos de valores em que o useState do contexto vai possuir **
//
export type UmComponenteContextUseState = {
  quantityProduct: number
}

//
// ** Tipos de valores em que o site-editor vai possuir na raiz do objeto (root). **
//
// ** Todos os tipos desses objetos presentes nas raizes devem ser colocados em ./_schemas **
//
export type UmComponenteSiteEditorValues = {
  products: schema_product[]
}

//
// ** Tipos de valores em que o useUmComponenteContext() vai possuir **
//
export type UmComponenteUseContextValues = {
  getQuantityProducts: number
}