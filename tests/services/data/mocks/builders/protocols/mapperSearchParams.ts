import { type ProtocolMapperSearchParams } from '../../../../../../src/services/data/protocols/mapperSearchParams.ts'
import { BuilderBase } from '../base.ts'

import { faker } from '@faker-js/faker'

const generateSearchResult = (): ProtocolMapperSearchParams.Result => ({
  byBrand: faker.commerce.productAdjective(),
  byCategory: faker.commerce.productAdjective(),
  byCollection: faker.commerce.productAdjective(),
  byEAN13: faker.commerce.productAdjective(),
  byProductId: faker.commerce.productAdjective(),
  byReferenceId: faker.commerce.productAdjective(),
  bySellerId: faker.commerce.productAdjective(),
  bySpecification: faker.commerce.productAdjective(),
  bySkuId: faker.commerce.productAdjective(),
  byText: faker.commerce.productAdjective()
})

export class BuilderProtocolMapperSearchParams
  extends BuilderBase<ProtocolMapperSearchParams, ProtocolMapperSearchParams.Result> {
  constructor () {
    super(
      { map: () => generateSearchResult() },
      'map'
    )
  }
}