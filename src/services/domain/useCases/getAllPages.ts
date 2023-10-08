import { ExternalModelRuntime } from "../external/models/runtime.ts";
import { InternalModelPage } from "../internal/models/page.ts";



export interface IUseCaseGetAllPages {
		map: (params: IUseCaseGetAllPages.Params) => IUseCaseGetAllPages.Result
}

export namespace IUseCaseGetAllPages {
		export type Params = ExternalModelRuntime

		export type Result = Promise<InternalModelPage[]>
}