import type { QueryHookOptions } from 'react-apollo'
import { useQuery } from 'react-apollo'

import { QueryProducts } from 'vtex.store-resources'
import { QuerySearchProductVariables, QuerySearchProductData } from '../interfaces/queryo-search-products'

export default function useQuerySearchProducts(
  options: QueryHookOptions<QuerySearchProductData, QuerySearchProductVariables>
) {
  return useQuery<QuerySearchProductData, QuerySearchProductVariables>(QueryProducts, options)
}
