import { ExternalModelProduct } from "../../domain/external/models/product.ts";



export interface ProtocolMapAllPages {
		mapAllPages: (params: ProtocolMapAllPages.Params) => ProtocolMapAllPages.Result
}

export namespace ProtocolMapAllPages {
		export type Result = Promise<ExternalModelProduct | null>

		export type Params = Promise<Record<string, any> | null>
}