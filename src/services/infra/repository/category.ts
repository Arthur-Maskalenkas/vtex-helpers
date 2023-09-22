import { type ProtocolRepositoryLoadAllCategories } from '../../data/protocols/repositoryLoadAllCategories.ts'
import { type ProtocolMapModelCategory } from '../../data/protocols/mapModelCategory.ts'



export class RepositoryCategory implements ProtocolRepositoryLoadAllCategories,
			ProtocolMapModelCategory {
		async map(listExternalCategories: ProtocolMapModelCategory.Params): ProtocolMapModelCategory.Result {
				const mapCategory = ({ id, name, children = [], url }: ProtocolMapModelCategory.ParamModel) => {
						let mappedChildren: any = null

						if (children.length > 0) {
								mappedChildren = children.map(mapCategory)
						}

						return { id, name, url, children: mappedChildren ?? [] }
				}

				return listExternalCategories.map(mapCategory)
		}

		async loadAll(): ProtocolRepositoryLoadAllCategories.Result {
				const result = await fetch('/api/catalog_system/pub/category/tree/3')

				const data = await result.json()

				if (!data) return []

				return data
		}
}