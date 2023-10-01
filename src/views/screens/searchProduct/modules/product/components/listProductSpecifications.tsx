import { useSearchProductContext } from "../../../context";

import { Styleds as S } from "./styleds.tsx";



export const ListProductSpecifications = () => {
		const { states } = useSearchProductContext()
		const specifications = states.product?.currentProduct?.specifications

		return (
				<S.Section>
						<S.AttrTitle>Especificações De Produto</S.AttrTitle>
						<S.List>
								{specifications?.map((specification, index) => (
										<li key={index}>
												<S.AttrTitle>{specification.name}</S.AttrTitle>
												<S.AttrDescription>{specification.values[0].value}</S.AttrDescription>
										</li>
								))}
						</S.List>
				</S.Section>
		)
}