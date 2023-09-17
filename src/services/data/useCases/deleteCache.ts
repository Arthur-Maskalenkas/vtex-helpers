import { type IUseCaseDeleteCache } from '../../domain/useCases/deleteCache.ts'
import { type ProtocolRepositoryDeleteCache } from '../protocols/repositoryDeleteCache.ts'

export class UseCaseDeleteCache implements IUseCaseDeleteCache {
  constructor (
    private readonly repositoryDeleteCache: ProtocolRepositoryDeleteCache
  ) {
  }

  async delete (params: IUseCaseDeleteCache.Params): IUseCaseDeleteCache.Result {
    if (!params.id) {
      return false
    }

    await this.repositoryDeleteCache.delete(params)

    return true
  }
}