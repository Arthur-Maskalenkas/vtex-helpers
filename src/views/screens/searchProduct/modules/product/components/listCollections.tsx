import { useSearchProductContext } from "../../../context";

import { Styleds as S } from "./styleds.tsx";



export const ListCollections = () => {
		const { states } = useSearchProductContext()

		const collections = states.product?.currentProduct?.collections

		return (
				<S.Section>
						<S.AttrTitle>Coleções</S.AttrTitle>
						<S.List>
								{collections?.map((collection, index) => (
										<li key={index}>
												<S.AttrDescription><strong>{collection.value}</strong></S.AttrDescription>
												<S.AttrDescription>{collection.name}</S.AttrDescription>
										</li>
								))}
						</S.List>
				</S.Section>
		)
}