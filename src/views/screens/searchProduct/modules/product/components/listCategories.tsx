import { useSearchProductContext } from "../../../context";

import { Styleds as S } from "./styleds.tsx";



export const ListCategories = () => {
		const { states } = useSearchProductContext()

		const categories = states.product?.currentProduct?.categories

		return (
				<S.Section>
						<S.AttrTitle>Categorias</S.AttrTitle>
						<S.List>
								{categories?.map((categorie, index) => (
										<li key={index}>
												<S.AttrTitle>{categorie.name}</S.AttrTitle>
												<S.AttrDescription>{categorie.value}</S.AttrDescription>
										</li>
								))}
						</S.List>
				</S.Section>
		)
}