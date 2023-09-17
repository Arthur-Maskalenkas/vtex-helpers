import { type ProtocolController } from '../protocols/controller.ts'
import { type IUseCaseLoadAllCategories } from '../../domain/useCases/loadAllCategories.ts'
import { type IUseCaseLoadCache } from '../../domain/useCases/loadCache.ts'
import { type IUseCaseSaveCache } from '../../domain/useCases/saveCache.ts'

export class ControllerLoadAllCategories implements ProtocolController {
  constructor (
    private readonly usecaseLoadAllCategories: IUseCaseLoadAllCategories,
    private readonly usecaseLoadCache: IUseCaseLoadCache,
    private readonly usecaseSaveCache: IUseCaseSaveCache
  ) {}

  public async handle<R = IUseCaseLoadAllCategories.Result> (): Promise<R> {
    try {
      const cache = await this.usecaseLoadCache.load({ id: 'categories' })
      if (cache) return cache
      const categories = await this.usecaseLoadAllCategories.loadAll() as R
      await this.usecaseSaveCache.save({ id: 'categories', value: categories })
      return categories
    } catch (error) {
      console.error(error)
      return [] as R
    }
  }
}