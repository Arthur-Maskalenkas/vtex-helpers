import { ProductContextState } from "vtex.product-context/react/ProductContextProvider"
import { ColorsResolver } from "../infra/colors-resolver"
import { DistanceResolver } from "../infra/distance-resolver"
import { SizesResolver } from "../infra/sizes-resolver"
import { GetForm } from "../presentation/get-form"


export const buildServiceGetForm = (productContext: Partial<ProductContextState | undefined>) => {
	const colorsResolver = new ColorsResolver(productContext)
	const sizesResolver = new SizesResolver(productContext)
	const distanceResolver = new DistanceResolver(productContext)

	return new GetForm(colorsResolver, sizesResolver, distanceResolver)

}
