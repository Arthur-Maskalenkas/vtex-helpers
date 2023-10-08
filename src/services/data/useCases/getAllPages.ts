import { IUseCaseGetAllPages } from "../../domain/useCases/getAllPages.ts";
import { MapperInternalModelPage } from "../mapper/models/internal/page.ts";



export class UseCaseGetAllPages implements IUseCaseGetAllPages {
		constructor() {
		}

		public async load(params: IUseCaseGetAllPages.Params): IUseCaseGetAllPages.Result {
				const pagesToMap = params?.pages

				const result = MapperInternalModelPage.mapExternalModelRuntimePages(pagesToMap)

				return result ?? []
		}


}