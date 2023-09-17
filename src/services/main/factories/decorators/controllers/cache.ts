import { DecoratorControllerCache } from '../../../decorators/controllers/cache.ts'
import { factoryUsecaseLoadCache } from '../../useCases/factoryUsecaseLoadCache.ts'
import { factoryUsecaseSaveCache } from '../../useCases/factoryUsecaseSaveCache.ts'
import { type ProtocolController } from '../../../../presentation/protocols/controller.ts'

export const factoryDecoratorControllerCache = <TParams, TResult> (controller: ProtocolController) => {
  const usecaseLoadCache = factoryUsecaseLoadCache()
  const usecaseSaveCache = factoryUsecaseSaveCache()

  return new DecoratorControllerCache<TParams, TResult>(
    controller,
    usecaseLoadCache,
    usecaseSaveCache
  )
}