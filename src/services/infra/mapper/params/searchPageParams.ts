import { ProtocolMapSearchPageParams } from "../../../data/protocols/mapSearchPageParams.ts";



type Params = {
		id: string
		value: string
}

type Response = {
		id: string
		value: string
}

export class MapperSearchPageParams implements ProtocolMapSearchPageParams {
		map(params: ProtocolMapSearchPageParams.Params): ProtocolMapSearchPageParams.Result {
				const searchParams = params.split(',')

				const mappedIds: string[] = []
				const mappedValues: string[] = []

				for (let i = 0; i < searchParams.length; i++) {
						const currentParam = searchParams[i]

						const [ attribute, id, value ] = currentParam.split('=')

						const paramsStrategy: any = {
								paramCategorie: this.mapCategorie,
								paramBrand: this.mapBrand,
								paramCollection: this.mapCollection,
								paramSpecification: this.mapSpecification
						}

						const currentStrategy = paramsStrategy[attribute]

						if (!currentStrategy) continue

						const result = currentStrategy({ id, value })

						mappedIds.push(result.id)
						mappedValues.push(result.value)
				}

				return `/${mappedIds.join('/')}?map=${mappedValues.join(',')}`
		}

		private mapCategorie({ id }: Params): Response {
				return {
						id,
						value: 'c'
				}
		}

		private mapBrand({ id }: Params): Response {
				return {
						id,
						value: 'b'
				}
		}

		private mapCollection({ id }: Params): Response {
				return {
						id,
						value: 'productClusterIds'
				}
		}

		private mapSpecification({ id, value }: Params): Response {
				return {
						id: `${value}`,
						value: `specificationFilter_${id}`
				}
		}
}