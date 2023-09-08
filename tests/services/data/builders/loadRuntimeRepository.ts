import { type ProtocolLoadRunTimeRepository } from '../../../../src/services/data/protocols/loadRuntimeRepository.ts'
import { type SpyInstance } from 'vitest'
import { type ExternalModelRuntime } from '../../../../src/services/domain/models/external/runtime.ts'

export class BuilderProtocolLoadRunTimeRepository {
  #useCaseLoadRunTime: ProtocolLoadRunTimeRepository
  public fnSpyLoad: SpyInstance<[], Promise<ExternalModelRuntime>> | null = null

  private constructor () {
    this.#useCaseLoadRunTime = {
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
    vi.spyOn(this.#useCaseLoadRunTime, 'searchRuntimeInHTML').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpyLoad = vi.spyOn(this.#useCaseLoadRunTime, 'searchRuntimeInHTML')

    return this
  }

  public build () {
    return this.#useCaseLoadRunTime
  }
}