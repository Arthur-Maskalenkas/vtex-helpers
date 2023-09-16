import { beforeEach, describe, expect, vi } from 'vitest'
import { fetchHelper } from '../../../../utils/test-utils.tsx'
import { RepositoryProduct } from '../../../../../src/services/infra/repository/product.ts'
const makeSut = () => {
  const sut = new RepositoryProduct()
  return {
    sut
  }
}

describe(RepositoryProduct.name, () => {
  // before each, create a new instance of sut
  let sut: RepositoryProduct

  beforeEach(() => {
    const newSut = makeSut()

    vi.resetAllMocks()

    sut = newSut.sut
  })

  describe(RepositoryProduct.prototype.load.name, () => {
    it('should call fetch with correct url', async () => {
      const fetchSpy = fetchHelper()
      const paramId = '0'

      fetchSpy.mockResolvedValue(
        { json: async () => Promise.resolve({ productId: paramId }) }
      )

      await sut.load(paramId)

      expect(fetch).toHaveBeenCalledWith(`/api/catalog_system/pub/products/search?productId:${paramId}`)
      expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('should return null if api returns null', async () => {
      const fetchSpy = fetchHelper()

      fetchSpy.mockResolvedValue({ json: async () => Promise.resolve([]) })

      const result = await sut.load('0')

      expect(result).toBeNull()
    })

    it('should return only first result from api', async () => {
      const fetchSpy = fetchHelper()

      fetchSpy.mockResolvedValue(
        { json: async () => Promise.resolve([{ productId: 0 }, { productId: 1 }]) }
      )

      const result = await sut.load('0')

      expect(result).toStrictEqual({ productId: 0 })
    })
  })
})