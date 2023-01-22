import {
  mock_schema_coming_by_site_editor_1,
  mock_product_context_1,
  mock_schema_coming_by_site_editor_2, mock_product_context_2, mock_result_2
} from './mock'

import { RemapSchema } from '../../src/remap-schema/remap-schema'
import {
  FilterLinks, MatchByBrand,
  MatchByCategory,
  MatchByCollection,
  MatchByProduct,
  MatchBySpecification, MatchByVariation
} from '../../src/filter-links'
import { RefinedDataBuilder } from '../../src/refined-data'
import { SortMatchs } from '../../src/sort-matchs/sort-matchs'
import { schema_site_editor_default_root_app_badge_custom } from '../../src/_interfaces'
import { product_context_root } from '../../src/_interfaces/product-context/custom_context'
import { MatchByPromotionDiscount } from '../../src/filter-links/matchers/match-by-promotion-discount'

type SutTypes = {
  sut: RemapSchema
}

const makeSut = (
  schema: schema_site_editor_default_root_app_badge_custom = mock_schema_coming_by_site_editor_1,
  productContext: product_context_root = mock_product_context_1): SutTypes => {
  const refinedData = new RefinedDataBuilder()
    .pickPriceField()
    .pickVariationField()
    .pickSpecificationField()
    .pickCollectionField()
    .pickCategory()
    .pickSellerField()
    .pickBrandField()
    .pickPriceField()
    .pickProductField()
    .pickPromotionDiscountField()
    .build()
    .get(productContext)

  const matchers = [
    new MatchByProduct(),
    new MatchByBrand(),
    new MatchByCategory(),
    new MatchBySpecification(),
    new MatchByVariation(),
    new MatchByCollection(),
    new MatchByPromotionDiscount()
  ]

  const filter = new FilterLinks(matchers, refinedData)

  const sortMatchs = new SortMatchs()

  const sut = new RemapSchema(schema,filter,sortMatchs)

  return {
    sut
  }
}

describe('remap schema', () => {
  it('Should return correctly data 1', () => {
    const { sut } = makeSut()

    const result = sut.remap()

    expect(result.quadrantTopRight.listOfFlags.length).toEqual(7)
  })

  it('Should return correctly data 2', () => {
    const { sut } = makeSut(mock_schema_coming_by_site_editor_2,mock_product_context_2)

    const result = sut.remap()

    expect(result).toStrictEqual(mock_result_2)
  })
})