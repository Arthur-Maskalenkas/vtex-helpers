import { ControllerLoadRuntime } from '../../../presentation/controllers/loadRuntime.ts'
import { factoryUseCaseLoadRuntime } from '../useCases/loadRuntime.ts'

export const factoryControllerLoadRuntime = () => {
  return new ControllerLoadRuntime(factoryUseCaseLoadRuntime())
}