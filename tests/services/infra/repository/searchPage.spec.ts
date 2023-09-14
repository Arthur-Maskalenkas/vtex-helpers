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
    describe('validation param category', () => {
      it('should return category param mapped', () => {
        const params = BuilderParamsProtocolMapperPageSearchParams
          .aBuilder()
          .withParamCategorie('id-0', 'value-0')
      })
    })
  })
})