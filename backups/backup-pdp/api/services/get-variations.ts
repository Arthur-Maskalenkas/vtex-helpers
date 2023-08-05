import {ProductRepository} from "../repository/product-repository/product-repository";


export class GetVariations {
  constructor(private readonly productRepository: ProductRepository) {  }

  public async handle(productReferenceId: string, productId: string) {

    try {
      return await this.productRepository.getProductVariations(productReferenceId,productId)

    } catch (e) {
      console.error('❌❌', e)
    }

    return
  }
}
