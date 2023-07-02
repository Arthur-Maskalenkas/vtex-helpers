import { ProductContextState } from "vtex.product-context/react/ProductContextProvider"
import { Item } from "vtex.product-context/react/ProductTypes"
import { GetForm } from "../presentation/get-form"


export class SizesResolver {
	constructor(private readonly productContext: Partial<ProductContextState | undefined>) {
	}

	public async handle(): Promise<GetForm.DataSizeTransformed | undefined> {


		const listSkus = this?.productContext?.product?.items


		const responseMapped = this?.map(listSkus ?? [])

		return this.sort(responseMapped ?? [])
	}

	private sort(params: GetForm.dataTransformed): GetForm.dataTransformed {
		const sizes = [ 'XXP', 'XP', 'PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG' ];
		return params?.sort((a, b) => sizes.indexOf(a?.comp_label) - sizes.indexOf(b?.comp_label) || a?.comp_label?.localeCompare(b?.comp_label));
	}

	private map(data: Item[]): GetForm.DataSizeTransformed {
		return data?.map((item) => {
			const comp_label = item?.variations?.find(p => p.name === "Tamanho")?.values[0] as any;
			const comp_title = `Selecionar tamanho ${comp_label}`
			const comp_isValid = item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0

			return {
				comp_isActive: this?.productContext?.selectedItem?.itemId === item?.itemId,
				form_value: item?.itemId,
				comp_label,
				comp_title,
				comp_isValid
			}
		})

	}
}
