import { UseCaseLoadRuntime } from '../../../data/useCases/loadRuntime.ts'
import { RepositoryRuntime } from '../../../infra/repository/runtime.ts'

export const factoryUseCaseLoadRuntime = () => {
  return new UseCaseLoadRuntime(new RepositoryRuntime())
}