import { ExternalModelRuntime } from "../external/models/runtime.ts";
import { InternalModelLink } from "../internal/models/link.ts";



export interface IUseCaseLoadAllLinks {
		load: (params: IUseCaseLoadAllLinks.Params) => IUseCaseLoadAllLinks.Result
}

export namespace IUseCaseLoadAllLinks {
		export type Params = ExternalModelRuntime

		export type Result = Promise<InternalModelLink[]>
}