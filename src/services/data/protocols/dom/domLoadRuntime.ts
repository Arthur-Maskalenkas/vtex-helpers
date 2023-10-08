import { IUseCaseLoadRuntime } from "../../../domain/useCases/loadRuntime.ts";
import { InternalModelRuntime } from "../../../domain/internal/models/runtime.ts";



export interface ProtocolDomLoadRuntime {
		getByDom: (params: ProtocolDomLoadRuntime.Params) => ProtocolDomLoadRuntime.Result
}

export namespace ProtocolDomLoadRuntime {
		export type Params = IUseCaseLoadRuntime.Params

		export type Result = Promise<InternalModelRuntime>
}