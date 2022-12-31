import React from "react";
import { useQuery } from 'react-apollo'
import GET_PRODUCTS from './productRelated.gql'
import { MaybeProduct, ProductContextState } from 'vtex.product-context/react/ProductTypes'
import useProduct from "vtex.product-context/useProduct";
import { ProductListContext } from "vtex.product-list-context";
import ShelfItem from "./components/ShelfItem";
import { SliderLayout } from "vtex.slider-layout"
import { useRuntime } from "vtex.render-runtime"
import styles from './styles.css'


interface IProps {
  recommendation: string;
}
const RelatedShelf = ({ recommendation }:IProps) => {
  const { product }: ProductContextState = useProduct();
  const { deviceInfo } = useRuntime();
  const { ProductListProvider } = ProductListContext;
  const productId = product?.productId;
  const { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      identifier: { field: 'id', value: productId },
      type: recommendation,
    }
  })

  const isMobile = deviceInfo?.isMobile;
  const productsRelateds:MaybeProduct[] = data?.productRecommendations;

  if (loading || error) return null;

  return (
    <div className={styles['containerSliderRelated']}>
      <ProductListProvider listName="Shelf">
        <SliderLayout
          itemsPerPage={{
            desktop:4,
            tablet:2,
            phone:1
          }}
          showNavigationArrows="never"
          infinite={true}
          fullWidth={true}
          centerMode={isMobile ? "to-the-left" : "disabled"}
          centerModeSlidesGap={isMobile ? 10 : 0}
        >
          {productsRelateds?.map((item, index) => (
            <ShelfItem item={item} key={index} />
          ))
          }
        </SliderLayout>
      </ProductListProvider>
    </div>
  )
}

export default RelatedShelf