import { type IUseCaseLoadAllCategories } from '../../domain/useCases/loadAllCategories.ts'
import { type ProtocolRepositoryLoadAllCategories } from '../protocols/repositoryLoadAllCategories.ts'
import { type InternalModelCategory } from '../../domain/internal/models/category.ts'
import { type ExternalModelCategory } from '../../domain/external/models/category.ts'
import { type ProtocolMapModelCategory } from '../protocols/mapModelCategory.ts'

export class UseCaseLoadAllCategories implements IUseCaseLoadAllCategories {
  constructor (
    private readonly repositoryLoadAllCategories: ProtocolRepositoryLoadAllCategories,
    private readonly mapModelCategory: ProtocolMapModelCategory
  ) { }

  async loadAll (): IUseCaseLoadAllCategories.Result {
    const allCategories = await this.repositoryLoadAllCategories.loadAll()

    const internalCategories: InternalModelCategory[] = []
    const mapExternalCategories = async (externalModelCategories: ExternalModelCategory[]) => {
      for (const externalModelCategory of externalModelCategories) {
        if (externalModelCategory.hasChildren) {
          await mapExternalCategories(externalModelCategory.children)
        }
        internalCategories.push(this.mapModelCategory.map(externalModelCategory))
      }
    }

    await mapExternalCategories(allCategories)

    return internalCategories
  }
}