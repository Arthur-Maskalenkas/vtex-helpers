import { type ProtocolLoadProducRepository } from '../../../../src/services/data/protocols/loadProductRepository.ts'
import { type ExternalModelProduct } from '../../../../src/services/domain/models/external/product.ts'
import { type SpyInstance } from 'vitest'

export class BuilderProtocolLoadProductRepository {
  public protocolLoadProductRepository: ProtocolLoadProducRepository
  public fnSpy: SpyInstance<[params: any], Promise<ExternalModelProduct[]>> = null as any

  private constructor () {
    this.protocolLoadProductRepository = {
      search: async () => Promise.resolve(true as any)
    } as any

    this.fnSpy = vi.spyOn(this.protocolLoadProductRepository, 'search')
  }

  public static a (): BuilderProtocolLoadProductRepository {
    return new BuilderProtocolLoadProductRepository()
  }

  public build (): ProtocolLoadProducRepository {
    return this.protocolLoadProductRepository
  }

  public withInvalidLength () {
    this.fnSpy.mockResolvedValueOnce([])

    return this
  }

  public returnWith (value: any) {
    this.fnSpy.mockResolvedValue(value)

    return this
  }
}