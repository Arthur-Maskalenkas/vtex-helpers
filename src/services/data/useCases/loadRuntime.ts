import { type IUseCaseLoadRunTime } from '../../domain/useCases/loadRuntime.ts'
import { type ModelRuntime } from '../../domain/models/runtime.ts'
import { type RepositoryRuntime } from '../../infra/repository/runtime.ts'

export class UseCaseLoadRuntime implements IUseCaseLoadRunTime {
  constructor (
    private readonly repositoryRuntime: RepositoryRuntime
  ) { }

  async load (): Promise<ModelRuntime> {
    return await this.repositoryRuntime.searchRuntimeInHTML()
  }
}