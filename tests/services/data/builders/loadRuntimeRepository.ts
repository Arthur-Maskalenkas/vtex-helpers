import { type ProtocolLoadRunTimeRepository } from '../../../../src/services/data/protocols/loadRuntimeRepository.ts'
import { type SpyInstance } from 'vitest'
import { type ExternalModelRuntime } from '../../../../src/services/domain/models/external/runtime.ts'

export class BuilderProtocolLoadRunTimeRepository {
  #protocolLoadRuntimeRepository: ProtocolLoadRunTimeRepository
  public fnSpyLoad: SpyInstance<[], Promise<ExternalModelRuntime>> | null = null

  private constructor () {
    this.#protocolLoadRuntimeRepository = {
      searchRuntimeInHTML: async () => {
        return await Promise.resolve({
          _manifest: 'manifest'
        })
      }
    }
  }

  static a () {
    return new BuilderProtocolLoadRunTimeRepository()
  }

  public withNullReturn () {
    vi.spyOn(this.#protocolLoadRuntimeRepository, 'searchRuntimeInHTML').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpyLoad = vi.spyOn(this.#protocolLoadRuntimeRepository, 'searchRuntimeInHTML')

    return this
  }

  public build () {
    return this.#protocolLoadRuntimeRepository
  }
}