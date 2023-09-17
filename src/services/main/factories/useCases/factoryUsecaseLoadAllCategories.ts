import { UseCaseLoadAllCategories } from '../../../data/useCases/loadAllCategories.ts'
import { RepositoryCategory } from '../../../infra/repository/category.ts'

export const factoryUsecaseLoadAllCategories = () => {
  const repositoryCategory = new RepositoryCategory()

  return new UseCaseLoadAllCategories(repositoryCategory, repositoryCategory)
}