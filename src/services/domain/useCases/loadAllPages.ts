import { ExternalModelRuntime } from "../external/models/runtime.ts";
import { InternalModelPage } from "../internal/models/page.ts";



export interface IUseCaseLoadAllPages {
		load: (params: IUseCaseLoadAllPages.Params) => IUseCaseLoadAllPages.Result
}

export namespace IUseCaseLoadAllPages {
		export type Params = {
				runtime: ExternalModelRuntime
		}

		export type Result = Promise<InternalModelPage[]>
}