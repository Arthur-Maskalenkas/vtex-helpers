import { ProtocolDomLoadRuntime } from "../../data/protocols/dom/domLoadRuntime.ts";



export class DomRuntime implements ProtocolDomLoadRuntime {
		private readonly window: Record<string, any>

		constructor(window: Record<string, any>) {
				this.window = window
		}

		public getByDom(): ProtocolDomLoadRuntime.Result {
				return this.window?.__RUNTIME__ ?? null
		}

}