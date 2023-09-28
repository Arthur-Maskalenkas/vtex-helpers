import { ProtocolMapSearchProductParams } from "../../../data/protocols/mapSearchProductParams.ts";
import { IUsecaseMapSearchPageParams } from "../../../domain/useCases/mapSearchPageParams.ts";



export class MapperSearchProductParams implements ProtocolMapSearchProductParams {
		public map(params: IUsecaseMapSearchPageParams.Params): IUsecaseMapSearchPageParams.Result {
				if (!params) return null

				const searchParams = new Set()

				const paramsSplited = params.split('=')

				if (paramsSplited[0] === 'paramProductId') {
						searchParams.add(`fq=productId:${paramsSplited[1]}`)
				}

				if (paramsSplited[0] === 'paramSkuId') {
						searchParams.add(`fq=skuId:${paramsSplited[1]}`)
				}

				if (paramsSplited[0] === 'productClusterIds') {
						searchParams.add(`fq=productClusterIds:${paramsSplited[1]}`)
				}


				return [ ...searchParams ].join(' ')
		}


}