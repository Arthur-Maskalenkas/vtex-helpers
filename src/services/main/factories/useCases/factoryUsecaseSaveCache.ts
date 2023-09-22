import { UseCaseSaveCache } from '../../../data/useCases/saveCache.ts'
import { RepositoryCache } from '../../../infra/repository/cache.ts'



export const factoryUsecaseSaveCache = () => {
		const repositoryCache = new RepositoryCache()

		return new UseCaseSaveCache(repositoryCache)
}