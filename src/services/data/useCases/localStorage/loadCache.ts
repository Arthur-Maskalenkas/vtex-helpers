import { type ProtocolLocalStorageLoadCache } from '../../protocols/localStorage/localStorageLoadCache.ts'
import { type IUseCaseLoadCache } from '../../../domain/useCases/loadCache.ts'



export class UseCaseLoadCache implements IUseCaseLoadCache {
		constructor(
				private readonly repositoryLoadCache: ProtocolLocalStorageLoadCache
		) {
		}

		async load(params: IUseCaseLoadCache.Params): IUseCaseLoadCache.Result {
				if (!params.id) {
						return false
				}

				return await this.repositoryLoadCache.load(params)
		}
}