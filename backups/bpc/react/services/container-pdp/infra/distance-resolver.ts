import { ProductContextState } from "vtex.product-context/react/ProductContextProvider"
import { ApiRestVtexSearch } from "../../../typings/apis/api-rest-vtex-search"
import { API } from "../helpers/apis"
import { HelperFetch } from "../helpers/fetch"
import { GetForm } from "../presentation/get-form"


export class DistanceResolver {
	constructor(private readonly productContext: Partial<ProductContextState | undefined>) {
	}

	public async handle(): Promise<GetForm.DataDistanceTransformed | undefined> {
		const baseRefId = this?.productContext?.product?.productReference;
		const api = API.getSimilarProducts(baseRefId)

		const response = await HelperFetch?.getData<ApiRestVtexSearch>(api)

		return this.mapResponse(response)?.sort((a, b) => {
			const kmA = parseInt(a?.comp_label?.split(" ")?.[0]);
			const kmB = parseInt(b?.comp_label?.split(" ")?.[0]);

			if (kmA > kmB) {
				return -1;
			} else if (kmA < kmB) {
				return 1;
			} else {
				return 0;
			}
		})
	}

	private mapResponse(data: ApiRestVtexSearch): GetForm.DataDistanceTransformed {

		return data?.map((fetchedItem) => {
			const currentlyItemPage = fetchedItem?.productId === this.productContext?.product?.productId

			const fetchItemKmValue = (fetchedItem as any)?.KM?.[0]

			return {
				comp_isActive: currentlyItemPage,
				form_value: fetchedItem?.productId,
				comp_label: fetchItemKmValue?.replace(/([0-9]+)(A-z+)/, '$1 $2'),
				comp_title: fetchItemKmValue,
				comp_isValid: fetchedItem?.items?.some(item => item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0),
			}
		})

	}
}
