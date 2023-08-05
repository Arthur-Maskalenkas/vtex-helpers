# criando contexto de produuto
# como criar contexto de produto

export default function ProductSummarySearchBar(props: any) {
  const clusterHighlights = props?.product?.clusterHighlights
  const dataMapped = Object.entries(clusterHighlights).map(([id, name]) => ({
    id,
    name
  }));
  const restProps = { clusterHighlights: dataMapped }
  return (
    <ProductContextProvider query={{ products: props.product?.sku }} product={{ ...props?.product, ...restProps } as any}>
      <ProductSummarySearchBarComp {...props} />
    </ProductContextProvider>
  )

}
