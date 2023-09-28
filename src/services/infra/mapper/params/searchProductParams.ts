import { ProtocolMapSearchProductParams } from "../../../data/protocols/mapSearchProductParams.ts";
import { IUsecaseMapSearchPageParams } from "../../../domain/useCases/mapSearchPageParams.ts";



export class MapperSearchProductParams implements ProtocolMapSearchProductParams {
		public map(params: IUsecaseMapSearchPageParams.Params): IUsecaseMapSearchPageParams.Result {
				if (!params) return null


				return null as any;
		}


}