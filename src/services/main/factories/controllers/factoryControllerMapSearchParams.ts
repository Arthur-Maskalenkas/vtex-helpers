import { FactoryUsecaseMapSearchParams } from '../useCases/factoryUsecaseMapSearchParams.ts'
import { ControllerSearchPageParams } from '../../../presentation/controllers/searchPageParams.ts'

export const factoryControllerMapSearchParams = () => {
  const usecaseMapSearchParams = FactoryUsecaseMapSearchParams()

  return new ControllerSearchPageParams(usecaseMapSearchParams)
}