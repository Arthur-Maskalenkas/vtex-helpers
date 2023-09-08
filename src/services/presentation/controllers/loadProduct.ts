import { type IUseCaseLoadProduct, type IUseCaseLoadProductParams } from '../../domain/useCases/loadProduct.ts'
import { ErrorOnLoadProduct } from '../errors/onLoadProduct.ts'
import { type ProtocolController } from '../protocols/controller.ts'

export class ControllerLoadProduct implements ProtocolController {
  constructor (
    private readonly useCaseLoadProduct: IUseCaseLoadProduct
  ) { }

  public async handle (params: IUseCaseLoadProductParams) {
    try {
      null as any
    } catch (error) {
      console.error(error)
    }
  }
}