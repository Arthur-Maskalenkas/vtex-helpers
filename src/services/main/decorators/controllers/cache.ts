import { type ProtocolController } from '../../../presentation/protocols/controller.ts'
import { type IUseCaseLoadCache } from '../../../domain/useCases/loadCache.ts'
import { type IUseCaseSaveCache } from '../../../domain/useCases/saveCache.ts'

export class DecoratorControllerCache<TParams, TResult> {
  constructor (
    private readonly controller: ProtocolController,
    private readonly usecaseLoadCache: IUseCaseLoadCache,
    private readonly usecaseSaveCache: IUseCaseSaveCache
  ) {}

  private toCacheReturn (result: any, isCached: boolean = false): any {
    return {
      isCached,
      data: result
    }
  }

  async handle (
    params: DecoratorControllerCache.Params<TParams> = {}
  ): DecoratorControllerCache.Result<TResult> {
    if (!params?.id) {
      const result = await this.controller.handle(params?.controllerArgs)

      return this.toCacheReturn(result)
    }

    const cache = await this.usecaseLoadCache.load({ id: params?.id })
    if (cache) return this.toCacheReturn(cache, true)

    const result = await this.controller.handle(params?.controllerArgs)
    await this.usecaseSaveCache.save({ id: params?.id, value: result })

    return this.toCacheReturn(result)
  }
}

export namespace DecoratorControllerCache {
  export type Params<TParams> = {
    controllerArgs?: TParams
    id?: string
  }

  export type Result<TResult> = Promise<{
    isCached: boolean
    data: Awaited<TResult>
  }>
}