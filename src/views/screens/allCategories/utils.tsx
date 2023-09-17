import { useApplicationReducerContext } from '../../../context'
import { useEffect, useState } from 'react'
import { type InternalModelCategory } from '../../../services/domain/internal/models/category.ts'

export const useAllCategories = () => {
  const { state } = useApplicationReducerContext()
  const [categories, setCategories] = useState<InternalModelCategory[]>([])

  useEffect(() => {
    const getCategories = async () => {
      console.log('🔥 allCategories 10:39')
      const controller = state.appInternalServices.category.loadAll
      console.log('🔥 allCategories 10:37', {
        controller
      })

      const response = await controller.handle({ id: 'categories.allCategories' })

      console.log('#!! 🔥 allCategories 10:39', {
        controller,
        response

      })
      setCategories(response?.data)
    }
    getCategories()
  }, [state, state.appInternalServices])

  return { categories }
}