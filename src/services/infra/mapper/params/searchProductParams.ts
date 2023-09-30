import { ProtocolMapSearchProductParams } from "../../../data/protocols/mapSearchProductParams.ts";
import { IUsecaseMapSearchPageParams } from "../../../domain/useCases/mapSearchPageParams.ts";



export class MapperSearchProductParams implements ProtocolMapSearchProductParams {
		public map(params: IUsecaseMapSearchPageParams.Params): IUsecaseMapSearchPageParams.Result {
				if (!params) return null

				const searchParams = new Set()

				for (const param of params.split(',')) {
						const [ paramStrategy, paramId ] = param.split('=')

						const paramsStrategy: any = {
								paramProductId: () => this.mapFq('productId', paramId),
								paramSkuId: () => this.mapFq('skuId', paramId),
								productClusterIds: () => this.mapFq('productClusterIds', paramId),
								paramProductName: () => this.mapFt(paramId)
						}

						const currentStrategy = paramsStrategy[paramStrategy]

						if (!currentStrategy) continue

						const result = currentStrategy()
								.replace(/\s/g, '%20')


						searchParams.add(result)
				}

				return [ 'search?_from=0&_to=49', ...searchParams ].join('&')
		}

		private mapFq(paramKey: string, id: string) {
				return `fq=${paramKey}:${id}`
		}

		private mapFt(value: string) {
				return `ft=${value}`
		}


}