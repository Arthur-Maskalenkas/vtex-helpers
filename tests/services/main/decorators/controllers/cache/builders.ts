import { BuilderBase } from '../builderBase.ts'
import { type ProtocolController } from '../../../../../../src/services/presentation/protocols/controller.ts'
import { type IUseCaseLoadCache } from '../../../../../../src/services/domain/useCases/loadCache.ts'
import { type IUseCaseSaveCache } from '../../../../../../src/services/domain/useCases/saveCache.ts'



export class BuilderController
		extends BuilderBase<ProtocolController, any> {
		constructor() {
				super(
						{ handle: async () => Promise.resolve('controller.result') as any }, 'handle'
				)
		}

		returnNull(): BuilderController {
				this.fnSpy.mockResolvedValue(null as any)

				return this
		}
}

export class BuilderUsecaseLoadCache
		extends BuilderBase<IUseCaseLoadCache, IUseCaseLoadCache.Result> {
		constructor() {
				super(
						{ load: async () => Promise.resolve('cache.result') }, 'load'
				)
		}

		returnNull(): BuilderUsecaseLoadCache {
				this.fnSpy.mockResolvedValue(null as any)

				return this
		}
}

export class BuilderUsecaseSaveCache
		extends BuilderBase<IUseCaseSaveCache, IUseCaseSaveCache.Result> {
		constructor() {
				super(
						{ save: async () => true }, 'save'
				)
		}
}