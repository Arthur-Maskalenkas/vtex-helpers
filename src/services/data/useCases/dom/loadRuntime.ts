import { IUseCaseLoadRuntime } from "../../../domain/useCases/loadRuntime.ts";
import { ProtocolDomLoadRuntime } from "../../protocols/dom/domLoadRuntime.ts";
import { InternalModelRuntime } from "../../../domain/internal/models/runtime.ts";



export class UseCaseLoadRuntime implements IUseCaseLoadRuntime {
		constructor(
				private readonly domLoadRuntime: ProtocolDomLoadRuntime
		) {
		}

		async load(): IUseCaseLoadRuntime.Result {
				const runtime = await this.domLoadRuntime.getByDom()

				const modelRuntime = new InternalModelRuntime(runtime)

				return modelRuntime
		}


}