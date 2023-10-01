import { useEffect, useState } from 'react'
import { type InternalModelCategory } from '../../../services/domain/internal/models/category.ts'
import { useApplicationReducerContext } from "../../application/context";



export const useAllCategories = () => {
		const { state } = useApplicationReducerContext()
		const [ categories, setCategories ] = useState<InternalModelCategory[]>([])

		useEffect(() => {
				const getCategories = async () => {
						const controller = state.appInternalServices.category.loadAll
						const response = await controller.handle({ id: 'categories.allCategories' })

						('#!! 🔥 allCategories 10:39', {
								controller,
								response

						})
						setCategories(response?.data)
				}
				getCategories()
		}, [ state, state.appInternalServices ])

		return { categories }
}