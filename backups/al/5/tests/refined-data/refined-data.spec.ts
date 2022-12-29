import { get_mock, mock_product_context } from './_mocks/default'

import { RefinedData } from '../../src/refined-data/refined-data'
import { FieldDataRefined } from '../../src/remap-schema/_interfaces'
import { product_context_root } from '../../src/remap-schema/_interfaces/product-context/custom_context'

type SutTypes = {
  sut: RefinedData
}

const makeSut = (dataRefined: product_context_root | null = mock_product_context): SutTypes => {
  const sut = new RefinedData({ ...dataRefined })

  return {
    sut
  }
}

describe('RefinedData', () => {
  describe('Default', () => {
    it('Should return all data if any data is found', () => {
      const { sut } = makeSut()
      const result_mock = {
        brand: get_mock().brand,
        category: get_mock().category,
        product: get_mock().product,
        seller: get_mock().seller,
        price: get_mock().price,
        collection: get_mock().collection,
        variation: get_mock().variation,
        specification: get_mock().specification
      }

      const result = sut.refineAllData()

      expect(result).toStrictEqual(result_mock)
    })

    it('Should return null if all data found in null', () => {
      const { sut } = makeSut(null)
      const result_mock = {
        brand: null,
        category: null,
        product: null,
        seller: null,
        price: null,
        collection: null,
        variation: null,
        specification: null
      }

      const result = sut.refineAllData()

      expect(result).toBe(null)
    })
  })

  describe('Pick data methods', () => {
    describe("Seller Data", () => {
      const pickDataRef = "pickSellerData"
      const dataOnMock = "seller"

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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
      })
    })

    describe("Price Data", () => {
      const pickDataRef = "pickPriceData"
      const dataOnMock = "price"

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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
      })
    })

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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
      })
    })

    describe("Variation Data", () => {
      const pickDataRef = "pickVariationData"
      const dataOnMock = "variation"

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

        expect(pickSpy).toHaveReturnedWith(get_mock()[dataOnMock])
      })
    })
  })
})