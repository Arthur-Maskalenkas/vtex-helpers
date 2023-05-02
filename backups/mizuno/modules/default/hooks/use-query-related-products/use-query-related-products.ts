import type { QueryHookOptions } from 'react-apollo'
import { useQuery } from 'react-apollo'

// @ts-ignore
import { QueryProductRecommendations } from 'vtex.store-resources'
import { QueryRelatedProductData, QueryRelatedProductVariables } from '../interfaces/query-related-products'

export default function useQueryRelatedProducts(
  options: QueryHookOptions<QueryRelatedProductData, QueryRelatedProductVariables>
) {
  return useQuery<QueryRelatedProductData, QueryRelatedProductVariables>(QueryProductRecommendations, options)
}
