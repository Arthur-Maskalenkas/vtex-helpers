import { factoryUsecaseLoadAllCategories } from '../useCases/factoryUsecaseLoadAllCategories.ts'
import { ControllerLoadAllCategories } from '../../../presentation/controllers/loadAllCategories.ts'
import { factoryUsecaseLoadCache } from '../useCases/factoryUsecaseLoadCache.ts'
import { factoryUsecaseSaveCache } from '../useCases/factoryUsecaseSaveCache.ts'

export const factoryControllerLoadAllCategories = () => {
  const usecaseLoadAllCategories = factoryUsecaseLoadAllCategories()
  const usecaseLoadCache = factoryUsecaseLoadCache()
  const usecaseSaveCache = factoryUsecaseSaveCache()

  return new ControllerLoadAllCategories(usecaseLoadAllCategories, usecaseLoadCache, usecaseSaveCache)
}