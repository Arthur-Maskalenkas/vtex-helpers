import { ExternalModelRuntime } from "../external/models/runtime.ts";
import { InternalModelPage } from "../internal/models/page.ts";



export interface IUseCaseMapAllPages {
		map: (params: IUseCaseMapAllPages.Params) => IUseCaseMapAllPages.Result
}

export namespace IUseCaseMapAllPages {
		export type Params = {
				runtime: ExternalModelRuntime
		}

		export type Result = Promise<InternalModelPage[]>
}