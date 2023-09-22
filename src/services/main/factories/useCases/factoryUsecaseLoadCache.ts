import { UseCaseLoadCache } from '../../../data/useCases/loadCache.ts'
import { RepositoryCache } from '../../../infra/repository/cache.ts'



export const factoryUsecaseLoadCache = () => {
		const repositoryCache = new RepositoryCache()

		return new UseCaseLoadCache(repositoryCache)
}