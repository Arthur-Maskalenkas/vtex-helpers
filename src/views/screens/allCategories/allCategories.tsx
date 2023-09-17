import { List } from '../commons/list'
import { useAllCategories } from './utils.tsx'

export const AllCategories = () => {
  const { categories } = useAllCategories()

  return (
        <div className="container-app-all-categories screen">
            <List.Container>
                {categories.map((category) => (
                    <List.Item index={category.id}>
                        <a href={`${category.url}`}>{category.name}</a>
                    </List.Item>
                ))}
            </List.Container>
        </div>
  )
}