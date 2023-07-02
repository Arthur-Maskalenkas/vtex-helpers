import { ProductContextState } from "vtex.product-context/react/ProductContextProvider"
import { ApiRestVtexSearch } from "../../../typings/apis/api-rest-vtex-search"
import { API } from "../helpers/apis"
import { HelperFetch } from "../helpers/fetch"
import { GetForm } from "../presentation/get-form"


export class ColorsResolver {
	constructor(private readonly productContext: Partial<ProductContextState | undefined>) {
	}

	public async handle(): Promise<GetForm.DataColorTransformed | undefined> {

		const baseRefId = this?.productContext?.product?.productReference?.replace(/(_).*$/, '$1');
		const api = API.getSimilarProducts(baseRefId)


		const response = await HelperFetch?.getData<ApiRestVtexSearch>(api)

		const filtered = this.filter(response)
		const responseMapped = this.mapResponse(filtered)
		return this.sort(responseMapped)
	}

	public filter(params: ApiRestVtexSearch): ApiRestVtexSearch {
		const currentDistanceValueOnProductContext = this.productContext?.product?.properties?.find(item => item?.name === 'KM')?.values[0]

		return params?.filter(item => item?.KM?.[0] === currentDistanceValueOnProductContext)
	}

	public sort(params: GetForm.DataColorTransformed) {
		return params?.sort((a, b) => {
			if (a.comp_isActive && !b.comp_isActive) {
				return -1;
			} else if (!a.comp_isActive && b.comp_isActive) {
				return 1;
			} else {
				return a.comp_title.localeCompare(b.comp_title);
			}
		})
	}

	public mapResponse(responseFetch: ApiRestVtexSearch): GetForm.DataColorTransformed {
		return responseFetch?.map((item) => {

			const color = item?.skuSpecifications?.find(p => p.field?.name === "Cor")?.values[0]?.name as any;
			const comp_title = `Selecionar cor ${color}`

			const comp_isActive = item?.productId === this.productContext?.product?.productId


			return {
				comp_label: item?.productName,
				comp_image: item?.items?.[0]?.images?.[0]?.imageUrl ?? '',
				comp_isActive,
				form_value: item?.productId,
				comp_title,
				comp_isValid: item?.items?.some(item => item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0)
			}
		})

	}
}