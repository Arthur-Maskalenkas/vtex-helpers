import { RepositoryProduct } from '../../../../src/services/infra/repository/product.ts'
import { beforeEach, describe } from 'vitest'
import { RepositorySearchPage } from '../../../../src/services/infra/repository/searchPage.ts'
import {
  BuilderParamsProtocolMapperPageSearchParams
} from '../mocks/builders/repositories/searchPage/protocolMapperPageSearchParams.ts'

const makeSut = () => {
  const sut = new RepositorySearchPage()
  return {
    sut
  }
}

describe(RepositorySearchPage.name, () => {
  // before each, create a new instance of sut
  let sut: RepositorySearchPage

  beforeEach(() => {
    const newSut = makeSut()

    vi.resetAllMocks()

    sut = newSut.sut
  })

  describe(RepositorySearchPage.prototype.mapPageSearchParams.name, () => {
    it('should return category param mapped', () => {
      const params = BuilderParamsProtocolMapperPageSearchParams
        .aBuilder()
        .withParamCategorie('id-0', 'value-0')
        .build()

      const expected = '/id-0?map=c'

      const result = sut.mapPageSearchParams(params)

      expect(result).toBe(expected)
    })

    it('should return brand param mapped', () => {
      const params = BuilderParamsProtocolMapperPageSearchParams
        .aBuilder()
        .withParamBrand('id-0', 'value-0')
        .build()

      const expected = '/id-0?map=b'

      const result = sut.mapPageSearchParams(params)

      expect(result).toBe(expected)
    })

    it('should return collection param mapped', () => {
      const params = BuilderParamsProtocolMapperPageSearchParams
        .aBuilder()
        .withParamCollection('id-0', 'value-0')
        .build()

      const expected = '/id-0?map=productClusterIds'

      const result = sut.mapPageSearchParams(params)

      expect(result).toBe(expected)
    })

    it('should return specification param mapped', () => {
      const params = BuilderParamsProtocolMapperPageSearchParams
        .aBuilder()
        .withParamSpecification('id-0', 'value-0')
        .build()

      const expected = '/value-0?map=specificationFilter_id-0'

      const result = sut.mapPageSearchParams(params)

      expect(result).toBe(expected)
    })

    it('should combine all params mapped', () => {
      const params = BuilderParamsProtocolMapperPageSearchParams
        .aBuilder()
        .withParamCategorie('categorie-id', 'categorie-value')
        .withParamBrand('brand-id', 'brand-value')
        .withParamCollection('collection-id', 'collection-value')
        .withParamSpecification('specification-id', 'specification-value')
        .build()

      // /Masculino/Olympikus/Todos/Evasense?map=c,b,productClusterIds,specificationFilter_Tecnologia
      const expected = '/categorie-id/brand-id/collection-id/specification-value?map=c,b,productClusterIds,specificationFilter_specification-id'

      const result = sut.mapPageSearchParams(params)
      console.log(result)

      expect(result).toBe(expected)
    })
  })
})