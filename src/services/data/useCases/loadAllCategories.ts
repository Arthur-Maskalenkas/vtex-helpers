import { type IUseCaseLoadAllCategories } from '../../domain/useCases/loadAllCategories.ts'
import { type ProtocolRepositoryLoadAllCategories } from '../protocols/repositoryLoadAllCategories.ts'
import { type ProtocolMapModelCategory } from '../protocols/mapModelCategory.ts'

export class UseCaseLoadAllCategories implements IUseCaseLoadAllCategories {
  constructor (
    private readonly repositoryLoadAllCategories: ProtocolRepositoryLoadAllCategories,
    private readonly mapModelCategory: ProtocolMapModelCategory
  ) { }

  async loadAll (): IUseCaseLoadAllCategories.Result {
    const allCategories = await this.repositoryLoadAllCategories.loadAll()

    if (!allCategories?.length) return []

    const internalCategories = await this.mapModelCategory.map(allCategories)

    return internalCategories
  }
}