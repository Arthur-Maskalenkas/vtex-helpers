import { ExternalModelRuntime } from "../external/models/runtime.ts";



export interface IUseCaseLoadRuntime {
		load: () => IUseCaseLoadRuntime.Result
}

export namespace IUseCaseLoadRuntime {
		export type Result = Promise<ExternalModelRuntime>
}