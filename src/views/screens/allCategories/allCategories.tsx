import { List } from '../commons/list'
import { useAllCategories } from './utils.tsx'
import { type InternalModelCategory } from '../../../services/domain/internal/models/category.ts'



const renderCategories = (categories: InternalModelCategory[]) => {
		return (
					<List.Container>
							{categories.map((category) => (
										<List.Item index={`${category.name}-${category.id}`}>
												<a href={`${category.url}`}>{category.name}</a>
												{category.children && category.children.length > 0 && (
															renderCategories(category.children)
												)}
										</List.Item>
							))}
					</List.Container>
		)
}

export const AllCategories = () => {
		const { categories } = useAllCategories()

		return (
					<div className="container-app-all-categories screen">
							{renderCategories(categories)}
					</div>
		)
}