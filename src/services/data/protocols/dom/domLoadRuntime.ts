import { InternalModelRuntime } from "../../../domain/internal/models/runtime.ts";



export interface ProtocolDomLoadRuntime {
		getByDom: () => ProtocolDomLoadRuntime.Result
}

export namespace ProtocolDomLoadRuntime {

		export type Result = Promise<InternalModelRuntime>
}