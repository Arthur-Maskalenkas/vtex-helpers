import { factoryUsecaseLoadAllCategories } from '../useCases/factoryUsecaseLoadAllCategories.ts'
import { ControllerLoadAllCategories } from '../../../presentation/controllers/loadAllCategories.ts'
import { factoryDecoratorControllerCache } from '../decorators/controllers/cache.ts'
import { type IUseCaseLoadAllCategories } from '../../../domain/useCases/loadAllCategories.ts'

export const factoryControllerLoadAllCategories = () => {
  const usecaseLoadAllCategories = factoryUsecaseLoadAllCategories()
  const controller = new ControllerLoadAllCategories(usecaseLoadAllCategories)

  return factoryDecoratorControllerCache<any, IUseCaseLoadAllCategories.Result>(controller)
}