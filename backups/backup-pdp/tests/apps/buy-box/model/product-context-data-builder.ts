import { _MaybeProduct, _ProductProperties, _product } from "../../../types/product-context";

export class ProductContextDataBuilder implements _MaybeProduct {
  public product: _product;

  private constructor(productContext: _MaybeProduct) {
    this.product = {
      productReference: '',
      properties: [],
      ...productContext?.product as _product
    }
  }

  public static aProductContext() {
    return new ProductContextDataBuilder({})
  }

  public build() {
    return new ProductContextDataBuilder({ product: this.product })
  }

  private addProductAttributes(propertieToAdd: _product) {
    this.product = Object.assign({}, this.product, propertieToAdd);
  }

  private addProductPropertiesAttributes(propertieToAdd: _ProductProperties) {
    this.product.properties?.push(propertieToAdd)
  }

  public withPropertiesToRenderNormalPage() {
    return this;
  }


  public withPropertiesToRenderBPCPage() {
    this.addProductAttributes({ productReference: 'bpc' })
    return this;
  }

  public withPropertiesToRenderPremium1Page() {
    this.addProductPropertiesAttributes({ name: 'Descrição Produto Premium', values: ['A product premium 1'] })
    return this
  }

  public withPropertiesToRenderPremium2Page() {
    this.addProductPropertiesAttributes({ name: 'Desc Premium', values: ['A product premium 2'] })
    return this
  }
}


