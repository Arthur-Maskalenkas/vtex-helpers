export type _MaybeProduct = {
  product?: _product
}

export type _product = {
  productReference?: string
  properties?: Array<_ProductProperties>
}


export type _ProductProperties = { name: "Descrição Produto Premium" | 'Desc Premium', values: [string] }
