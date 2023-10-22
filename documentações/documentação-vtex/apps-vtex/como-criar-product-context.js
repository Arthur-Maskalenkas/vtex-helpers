import { ProductContextProvider } from 'vtex.product-context'


export default function ProductSummarySearchBar(props: any) {
  const clusterHighlights = props?.product?.clusterHighlights
  const dataMapped = Object.entries(clusterHighlights).map(([id, name]) => ({
    id,
    name
  }));
  const restProps = { clusterHighlights: dataMapped }
  return (
    <ProductContextProvider product={{ ...product, ...restProps } as any} query={{ products: productTransformed }}>
      <ProductSummaryMain
        {...{} as any}
        Wishlist={Wishlist}
        index={index}
        FlagProductHighlight={FlagProductHighlight}
        FlagProductPriceSavings={FlagProductPriceSavings} />
    </ProductContextProvider>
  )

}
