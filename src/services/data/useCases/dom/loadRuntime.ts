import { IUseCaseLoadRuntime } from "../../../domain/useCases/loadRuntime.ts";
import { ProtocolDomLoadRuntime } from "../../protocols/dom/domLoadRuntime.ts";



export class UseCaseLoadRuntime implements IUseCaseLoadRuntime {
		constructor(
				readonly domLoadRuntime: ProtocolDomLoadRuntime
		) {
		}

		async load(params: IUseCaseLoadRuntime.Params): IUseCaseLoadRuntime.Result {
				return null as any
		}


}