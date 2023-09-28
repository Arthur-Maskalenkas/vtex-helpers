import { ProtocolMapSearchProductParams } from "../../../data/protocols/mapSearchProductParams.ts";
import { IUsecaseMapSearchPageParams } from "../../../domain/useCases/mapSearchPageParams.ts";



export class MapperSearchProductParams implements ProtocolMapSearchProductParams {
		public map(params: IUsecaseMapSearchPageParams.Params): IUsecaseMapSearchPageParams.Result {
				if (!params) return null

				const searchParams = new Set()
				const paramsSplited = params.split(',')

				for (const param of paramsSplited) {
						const [ paramStrategy, paramId ] = param.split('=')

						const paramsStrategy: any = {
								paramProductId: () => this.mapFq('productId', paramId),
								paramSkuId: () => this.mapFq('skuId', paramId),
								productClusterIds: () => this.mapFq('productClusterIds', paramId)
						}

						const currentStrategy = paramsStrategy[paramStrategy]

						if (!currentStrategy) continue

						const result = currentStrategy()

						searchParams.add(result)
				}

				return [ ...searchParams ].join('&')
		}

		private mapFq(paramKey: string, id: string) {
				return `fq=${paramKey}:${id}`
		}


}