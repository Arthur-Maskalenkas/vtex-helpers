import { useSearchProductContext } from "../../../context";

import { Styleds as S } from "./styleds.tsx";



export const ListSkuSpecifications = () => {
		const { states } = useSearchProductContext()

		const specifications = states.product?.currentProduct?.currentSku?.specifications

		return (
				<S.Section>
						<S.AttrTitle>Especificações De SKU</S.AttrTitle>
						<S.List>
								{specifications?.map((specification, index) => (
										<li key={index}>
												<S.AttrTitle>{specification.name}</S.AttrTitle>
												<S.AttrDescription>{specification.values?.[0].value}</S.AttrDescription>
										</li>
								))}
						</S.List>
				</S.Section>
		)
}