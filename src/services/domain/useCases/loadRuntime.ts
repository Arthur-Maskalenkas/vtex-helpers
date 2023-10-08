import { InternalModelRuntime } from "../internal/models/runtime.ts";



export interface IUseCaseLoadRuntime {
		load: () => IUseCaseLoadRuntime.Result
}

export namespace IUseCaseLoadRuntime {
		export type Result = Promise<InternalModelRuntime | null>

		export type Params = Record<string, any>
}