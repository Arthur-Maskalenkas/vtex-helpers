import { IUseCaseLoadRuntime } from "../../../domain/useCases/loadRuntime.ts";
import { ProtocolDomLoadRuntime } from "../../protocols/dom/domLoadRuntime.ts";



export class UseCaseLoadRuntime implements IUseCaseLoadRuntime {
		constructor(
				private readonly domLoadRuntime: ProtocolDomLoadRuntime
		) {
		}

		async load(): IUseCaseLoadRuntime.Result {
				const runtime = await this.domLoadRuntime.getByDom()
				return runtime
		}


}