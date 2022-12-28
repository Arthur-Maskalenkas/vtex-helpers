import { get_mock, mock_product_context } from './_mocks/default'

import { RefinedData } from '../../src/refined-data/refined-data'
import { ProductContextState } from '../../src/remap-schema/_interfaces/product-context/_product-context'
import { FieldDataRefined } from '../../src/remap-schema/_interfaces'

import mock = jest.mock

type SutTypes = {
  sut: RefinedData
}

const makeSut = (dataRefined: ProductContextState | null = mock_product_context): SutTypes => {
  const sut = new RefinedData(dataRefined)

  return {
    sut
  }
}

const makeFieldDataRefined = (name: string, value: string): FieldDataRefined => ({ name,value })

describe('RefinedData', () => {
  describe('Default', () => {
    it('Should return all data if any data is found', () => {
      const { sut } = makeSut()

      const result_mock = {
        brand: get_mock.brand,
        category: get_mock.category,
        product: get_mock.product
      }

      const result = sut.refineAllData()

      expect(result).toStrictEqual(result_mock)
    })
  })

  describe('Product Data', () => {
    const pickDataRef = "pickProductData"
    const dataOnMock = "product"

    it('Should call specific method to pick data', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveBeenCalled()
    })

    it('Should return null if data refined is not found', () => {
      const { sut } = makeSut(null)

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(null)
    })

    it('Should return data refined if data is found', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(get_mock[dataOnMock])
    })
  })

  describe('Category Data', () => {
    const pickDataRef = "pickCategoryData"
    const dataOnMock = "category"

    it('Should call specific method to pick data', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveBeenCalled()
    })

    it('Should return null if data refined is not found', () => {
      const { sut } = makeSut(null)

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(null)
    })

    it('Should return data refined if data is found', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(get_mock[dataOnMock])
    })
  })

  describe('Brand Data', () => {
    const pickDataRef = "pickBrandData"
    const dataOnMock = "brand"

    it('Should call specific method to pick data', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveBeenCalled()
    })

    it('Should return null if data refined is not found', () => {
      const { sut } = makeSut(null)

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(null)
    })

    it('Should return data refined if data is found', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(get_mock[dataOnMock])
    })
  })

  // colocar o temrinal do webstorm no desktop para rodar os testes, junto com um watch
  // melhorar os atalhos para debugar os testes e roda-los
  describe("Collection Data", () => {
    const pickDataRef = "pickCollectionData"
    const dataOnMock = "collection"

    it('Should call specific method to pick data', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveBeenCalled()
    })

    it('Should return null if data refined is not found', () => {
      const { sut } = makeSut(null)

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(null)
    })

    it('Should return data refined if data is found', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(get_mock[dataOnMock])
    })
  })

  describe("Specification Data", () => {
    const pickDataRef = "pickSpecificationData"
    const dataOnMock = "specification"

    it('Should call specific method to pick data', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveBeenCalled()
    })

    it('Should return null if data refined is not found', () => {
      const { sut } = makeSut(null)

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(null)
    })

    it('Should return data refined if data is found', () => {
      const { sut } = makeSut()

      const pickSpy = jest.spyOn(sut, [pickDataRef] as any)

      sut.refineAllData()

      expect(pickSpy).toHaveReturnedWith(get_mock[dataOnMock])
    })
  })
})