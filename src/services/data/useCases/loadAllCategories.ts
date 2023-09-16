import { type IUseCaseLoadAllCategories } from '../../domain/useCases/loadAllCategories.ts'
import { type ProtocolRepositoryLoadAllCategories } from '../protocols/repositoryLoadAllCategories.ts'
import {
  type ProtocolMapperExternalModelCategoryToInternalModelCategory
} from '../protocols/mapperExternalModelCategoryToInternalModelCategory.ts'
import { type InternalModelCategory } from '../../domain/internal/models/category.ts'
import { type ExternalModelCategory } from '../../domain/external/models/category.ts'

export class UseCaseLoadAllCategories implements IUseCaseLoadAllCategories {
  constructor (
    private readonly repositoryLoadAllCategories: ProtocolRepositoryLoadAllCategories,
    private readonly mapperExternalModelCategoryToInternalModelCategory: ProtocolMapperExternalModelCategoryToInternalModelCategory
  ) { }

  async loadAll (): IUseCaseLoadAllCategories.Result {
    const allCategories = await this.repositoryLoadAllCategories.loadAll()

    const internalCategories: InternalModelCategory[] = []
    const mapExternalCategories = async (externalModelCategories: ExternalModelCategory[]) => {
      for (const externalModelCategory of externalModelCategories) {
        if (externalModelCategory.hasChildren) {
          await mapExternalCategories(externalModelCategory.children)
        }
        internalCategories.push(this.mapperExternalModelCategoryToInternalModelCategory.map(externalModelCategory))
      }
    }

    Please create a commit message in the following format: <type><emoji>: <subject>. If the file is a test file, use the prefix test: <test><📝>: <subject>. If the file is not a test file, use a regular prefix. The type can be one of the following: feat, fix, docs, style, refactor, test, chore, ci, build, or revert. The emoji can be one of the following: ✅, 🚧, 🎨, ♻️, 🚀, ✅, 🚨, 🔧, 📦, 🚑, or ⏪. Your subject should be clear and concise, and please do not include details from each file. The commit should have maximum 1 line and not append body or footer.

    write a commit message in the following format: <type><emoji>: <subject>. If the file is test, should use a prefix test: <test><📝>: <subject>. If file is not a test, should use a normal prefix. The type can be feat, fix, docs, style, refactor, perf, test, chore, ci, build, temp or revert. The emoji can be ✅, 🚧, 📝, 🎨, ♻️, 🚀, ✅, 🚨, 🔧, 📦, 🚑 or ⏪. The subject should be clear and concise. not append body of footer. The sent text will be the differences between files, where deleted lines are prefixed with a single minus sign and added lines are prefixed with a single plus sign.
    {diff}

    await mapExternalCategories(allCategories)

    return internalCategories
  }
}