import { type IUseCaseLoadRunTime } from '../../../../src/services/domain/useCases/loadRuntime.ts'
import { type SpyInstance, vi } from 'vitest'
import { type ModelRuntime } from '../../../../src/services/domain/models/runtime.ts'

export class BuilderUseCaseLoadRuntime {
  #useCaseLoadRunTime: IUseCaseLoadRunTime
  public fnSpyLoad: SpyInstance<[], Promise<ModelRuntime>> | null = null

  private constructor () {
    this.#useCaseLoadRunTime = {
      load: async () => {
        return await Promise.resolve({
          _manifest: 'manifest'
        })
      }
    }
  }

  static a () {
    return new BuilderUseCaseLoadRuntime()
  }

  public withNullReturn () {
    vi.spyOn(this.#useCaseLoadRunTime, 'load').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpyLoad = vi.spyOn(this.#useCaseLoadRunTime, 'load')

    return this
  }

  public build () {
    return this.#useCaseLoadRunTime
  }
}