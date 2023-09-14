import { beforeEach, describe, expect, type SpyInstance, vi } from 'vitest'
import { RepositoryCategory } from '../../../../src/services/infra/repository/category.ts'
import { HelperFetch } from '../../../../src/services/infra/helpers/fetchData.ts'
import { fetchHelper } from '../../../utils/test-utils.tsx'

const makeSut = () => {
  const sut = new RepositoryCategory()
  return {
    sut
  }
}

describe(RepositoryCategory.name, () => {
  // before each, create a new instance of sut
  let sut: RepositoryCategory

  beforeEach(() => {
    const newSut = makeSut()

    vi.resetAllMocks()

    sut = newSut.sut
  })

  describe(RepositoryCategory.prototype.loadAll.name, () => {
    it('should call fetch with correct url', async () => {
      const fetchSpy = fetchHelper()

      fetchSpy.mockResolvedValue(
        { json: async () => Promise.resolve({}) }
      )

      await sut.loadAll()

      expect(fetch).toHaveBeenCalledWith('/api/catalog_system/pub/category/tree/3')
      expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('should return empty array if api returns null', async () => {
      const fetchSpy = fetchHelper()

      fetchSpy.mockResolvedValue(
        { json: async () => Promise.resolve(null) }
      )

      const result = await sut.loadAll()

      expect(result).toStrictEqual([])
    })

    it('should return all data returned from api', async () => {
      const fetchSpy = fetchHelper()

      fetchSpy.mockResolvedValue(
        {
          json: async () => Promise.resolve({
            anyData: 'anyData'
          })
        }
      )

      const result = await sut.loadAll()

      expect(result).toStrictEqual({ anyData: 'anyData' })
    })
  })
})