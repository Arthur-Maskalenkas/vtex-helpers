import { type IUseCaseSaveCache } from '../../domain/useCases/saveCache.ts'
import { type ProtocolRepositorySaveCache } from '../protocols/repositorySaveCache.ts'



export class UseCaseSaveCache implements IUseCaseSaveCache {
		constructor(
					private readonly repositorySaveCache: ProtocolRepositorySaveCache
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