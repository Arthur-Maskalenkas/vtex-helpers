import { BuilderBase } from '../../builderBase.ts'
import {
  type ProtocolRepositoryLoadProduct
} from '../../../../../src/services/data/protocols/repositoryLoadProduct.ts'
import { type InternalModelProduct } from '../../../../../src/services/domain/internal/models/product.ts'
import { type ExternalModelProduct } from '../../../../../src/services/domain/external/models/product.ts'
import { type ProtocolMapModelProduct } from '../../../../../src/services/data/protocols/mapModelProduct.ts'

const makeExternalModelProduct = (index = 0): ExternalModelProduct => ({ productId: index } as any)

const makeInternalModelProduct = (index = 0): InternalModelProduct => ({
  api: [],
  currentProduct: {
    id: index
  }
} as any)

export class BuilderRepositoryLoadProduct
  extends BuilderBase<ProtocolRepositoryLoadProduct, ProtocolRepositoryLoadProduct.Result> {
  constructor () {
    super(
      {
        load: async () => Promise.resolve(makeExternalModelProduct(0))
      },
      'load'
    )
  }

  withNull (): BuilderRepositoryLoadProduct {
    this.fnSpy.mockResolvedValue(null as any)

    return this
  }
}

export class BuilderMapperExternalModelProductToInternalModelProduct
  extends BuilderBase<ProtocolMapModelProduct, ProtocolMapModelProduct.Result> {
  constructor () {
    super(
      { map: () => makeInternalModelProduct(0) },
      'map'
    )
  }
}