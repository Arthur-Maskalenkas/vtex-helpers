import { FactoryUsecaseMapSearchParams } from '../useCases/factoryUsecaseMapSearchParams.ts'
import { ControllerSearchPageParams } from '../../../presentation/controllers/searchPageParams.ts'
import { factoryDecoratorControllerCache } from '../decorators/controllers/cache.ts'
import { type IUsecaseMapSearchPageParams } from '../../../domain/useCases/mapSearchPageParams.ts'



export const factoryControllerMapSearchParams = () => {
		const usecaseMapSearchParams = FactoryUsecaseMapSearchParams()
		const controller = new ControllerSearchPageParams(usecaseMapSearchParams)

		return factoryDecoratorControllerCache<IUsecaseMapSearchPageParams.Params, IUsecaseMapSearchPageParams.Result>(controller)
}