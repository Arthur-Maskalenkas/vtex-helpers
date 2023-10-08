import { UseCaseLoadCache } from '../../../../data/useCases/localStorage/loadCache.ts'
import { LocalStorageCache } from '../../../../infra/localStorage/cache.ts'



export const factoryUsecaseLoadCache = () => {
		const localStorageCache = new LocalStorageCache()

		return new UseCaseLoadCache(localStorageCache)
}