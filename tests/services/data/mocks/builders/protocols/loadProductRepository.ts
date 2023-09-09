import { type ProtocolLoadProducRepository } from '../../../../../../src/services/data/protocols/loadProductRepository.ts'
import { generateExternalModelProduct } from '../../generators/models/external/product.ts'
import { BuilderBase } from '../base.ts'

export class BuilderProtocolLoadProductRepository
  extends BuilderBase<ProtocolLoadProducRepository, ProtocolLoadProducRepository.Result> {
  constructor () {
    super(
      { search: async () => Promise.resolve([generateExternalModelProduct()]) },
      'search'
    )
  }

  public withInvalidLength () {
    this.fnSpy.mockResolvedValueOnce([])

    return this
  }
}