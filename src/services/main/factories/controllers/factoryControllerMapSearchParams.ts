import { FactoryUsecaseMapSearchParams } from '../useCases/factoryUsecaseMapSearchParams.ts'
import { ControllerSearchPageParams } from '../../../presentation/controllers/searchPageParams.ts'
import { factoryDecoratorControllerCache } from '../decorators/controllers/cache.ts'
import { type IUsecaseMapSearchParams } from '../../../domain/useCases/mapSearchParams.ts'

export const factoryControllerMapSearchParams = () => {
  const usecaseMapSearchParams = FactoryUsecaseMapSearchParams()
  const controller = new ControllerSearchPageParams(usecaseMapSearchParams)

  return factoryDecoratorControllerCache<IUsecaseMapSearchParams.Params, IUsecaseMapSearchParams.Result>(controller)
}