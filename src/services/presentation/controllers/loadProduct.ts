import { type IUseCaseLoadProduct, type IUseCaseLoadProductParams } from '../../domain/useCases/loadProduct.ts'
import { type ProtocolController } from '../protocols/controller.ts'
import { ErrorOnLoadProduct } from '../errors/onLoadProduct.ts'

export class ControllerLoadProduct implements ProtocolController {
  constructor (
    private readonly useCaseLoadProduct: IUseCaseLoadProduct
  ) { }

  public async handle (params: IUseCaseLoadProductParams) {
    try {
      const products = await this.useCaseLoadProduct.load(params)

      if (!products) return new ErrorOnLoadProduct()

      return products
    } catch (error) {
      console.error(error)
    }
  }
}