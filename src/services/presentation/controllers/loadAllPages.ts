import { type ProtocolController } from '../protocols/controller.ts'
import { IUseCaseGetAllPages } from "../../domain/useCases/getAllPages.ts";
import { IUseCaseLoadRuntime } from "../../domain/useCases/loadRuntime.ts";



export class ControllerLoadAllPages implements ProtocolController {
		constructor(
				private readonly usecaseLoadAllPages: IUseCaseGetAllPages,
				private readonly usecaseLoadRuntime: IUseCaseLoadRuntime
		) {
		}

		public async handle<R = IUseCaseGetAllPages.Result>(): Promise<R> {
				try {
						const runtime = await this.usecaseLoadRuntime.load()

						if (!runtime) return [] as R

						const allPages = await this.usecaseLoadAllPages.load(runtime) as R

						return allPages
				} catch (error) {
						console.error(error)
						return [] as R
				}
		}
}