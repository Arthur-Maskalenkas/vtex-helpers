import {ApolloClient} from 'apollo-client'
// @ts-ignore
import GET_PRODUCT_VARIATIONS from './graphql/get-product-variations.gql'
import {GetProductVariationsQuery} from "./graphql/get-product-variations";

export class ProductRepository {
  constructor(
    private readonly apolloClient: ApolloClient<object>
  ) {
  }

  public sort(params: GetProductVariationsQuery.Product[], productId: string) {
    return params?.sort((a, b) => {
      if (a.productId === productId && b.productId !== productId) {
        return -1;
      }
      if (a.productId !== productId && b.productId === productId) {
        return 1;
      }
      return a.productName.localeCompare(b.productName);
    });
  }

  public mapProductReferences(products: GetProductVariationsQuery.Product[]): GetProductVariationsQuery.MappedProduct[] {
    return products?.map(product => ({
      productName: product?.productName,
      href: product?.link,
      firstItemId: product?.items?.find(item => item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0)?.itemId,
      image: product?.items?.[0]?.images?.[0]?.imageUrl,
      productId: product?.productId
    })) ?? []
  }

  public mapProductSkus(products: GetProductVariationsQuery.Product[], productId: string): GetProductVariationsQuery.MappedSku[] {
    return products?.find(item => item.productId === productId)?.items?.map(item => {
      const label = item?.variations?.find(p => p.name === "Tamanho")?.values[0] ?? ''
      return {
        comp_isDisabled: item?.sellers?.[0]?.commertialOffer?.AvailableQuantity <= 0,
        comp_label: label,
        itemId: item?.itemId,
        productId: productId,
      }
    }) ?? []
  }

  public async getProductVariations(productReferenceId: string, productId: string): Promise<GetProductVariationsQuery.MappedResponse> {
    const productReferenceIdToQuery = productReferenceId?.replace(/(_).*$/, '$1*') ?? ''
    const products = await this.apolloClient.query<GetProductVariationsQuery.Response, GetProductVariationsQuery.Params>({
      query: GET_PRODUCT_VARIATIONS,
      variables: {referenceId: `${productReferenceIdToQuery}`}
    })

    const productsFetched = products?.data?.products!
    const listProductsReference = this.mapProductReferences(productsFetched)
    const listProductsSkus = this.mapProductSkus(productsFetched,productId)

    return {
      listProductsReference: [...listProductsReference, ...listProductsReference],
      listProductsSkus
    }
  }
}
