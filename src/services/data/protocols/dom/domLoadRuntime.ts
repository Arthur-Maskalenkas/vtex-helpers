export interface ProtocolDomLoadRuntime {
		getByDom: () => ProtocolDomLoadRuntime.Result
}

export namespace ProtocolDomLoadRuntime {

		export type Result = Promise<Record<string, any> | null>
}