import { UseCaseSaveCache } from '../../../../data/useCases/localStorage/saveCache.ts'
import { LocalStorageCache } from '../../../../infra/localStorage/cache.ts'



export const factoryUsecaseSaveCache = () => {
		const localStorageCache = new LocalStorageCache()

		return new UseCaseSaveCache(localStorageCache)
}