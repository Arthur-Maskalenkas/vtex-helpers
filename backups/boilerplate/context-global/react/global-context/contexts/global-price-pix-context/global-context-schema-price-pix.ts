import { SchemaObjectSiteEditor } from "../../cms-helper";

export const GlobalContextSchemaPricePix = (): SchemaObjectSiteEditor => ({
  type: 'object',
  properties: {
    discountPercentage: {
      type: 'number',
      title: "Desconto (%)",
      description: "Especifique a porcentagem de desconto a ser aplicada ao preço dos produtos. Exp: 5",
      default: 5
    }
  }
})
