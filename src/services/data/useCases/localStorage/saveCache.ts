import { type IUseCaseSaveCache } from '../../../domain/useCases/saveCache.ts'
import { type ProtocolLocalStorageSaveCache } from '../../protocols/localStorage/localStorageSaveCache.ts'



export class UseCaseSaveCache implements IUseCaseSaveCache {
		constructor(
				private readonly repositorySaveCache: ProtocolLocalStorageSaveCache
		) {
		}

		async save(params: IUseCaseSaveCache.Params): IUseCaseSaveCache.Result {
				if (!params.id || !params.value) {
						return false
				}

				await this.repositorySaveCache.save(params)

				return true
		}
}