import React from 'react'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { PageStrategyProps } from './types'
import { Layout } from "../../../components/layout";
import { useRuntime } from 'vtex.render-runtime'
import { ContainerLeftSide } from '../../../components/layout/container-left-side';
import { ContainerRightSide } from '../../../components/layout/container-right-side';
import {Vtex} from "../../../components/vtex";
import {StoreTheme} from "../../../components/store-theme";
import {Common} from "../../../components/commons";

export const Premium2PageStrategy = ({ productContext }: PageStrategyProps) => {

  const { deviceInfo: { isMobile } } = useRuntime()


  if (isMobile) {
    return (
      <Layout.ContainerMobile>
        <main className='container-main-content'>
          <div className="container-product-data">
            <div className={"bb-flex bb-space-between"}>
              <Vtex.Breadcrumb />
              <StoreTheme.Wishlist />
            </div>
            <Common.Title />
            <div className={"bb-flex"}>
              <StoreTheme.ProductRatingSummary />
              <StoreTheme.Share />
              <StoreTheme.PaymentOptions />
            </div>
            <Vtex.OldPrice />
            <div className="bb-flex bb-space-between">
              <Vtex.SellingPrice />
              <Vtex.Installments />
            </div>
          </div>

          <Vtex.SliderMainImages />

          <div className="container-product-data">
            <Common.SliderColors />
            <Common.SliderSizes />

            <StoreTheme.CalculateShipping />
            <Common.AddToCart />
            <Common.ProductPromotion />
          </div>
        </main>

        <Common.HtmlRender />
      </Layout.ContainerMobile>
    )
  }

  return (
    <Layout.ContainerDesktop classContainer='pdp-premium-2'>
      <main className='container-main-content'>
        <Layout.ContainerSides>
          <ContainerLeftSide>
            <Common.HtmlRender />
          </ContainerLeftSide>

          <ContainerRightSide>

            <div className={"bb-flex bb-space-between"}>
              <Vtex.Breadcrumb />
              <StoreTheme.Wishlist />
            </div>

            <Common.Title />

            <div className={"bb-flex"}>
              <StoreTheme.ProductRatingSummary />
              <StoreTheme.Share />
            </div>


            <Vtex.OldPrice />

            <div className="bb-flex bb-space-between">
              <Vtex.SellingPrice />
              <Vtex.Installments />
            </div>

            <Common.SliderColors />
            <Common.SliderSizes />

            <StoreTheme.CalculateShipping />
            <Common.AddToCart />
            <Common.ProductPromotion />
          </ContainerRightSide>
        </Layout.ContainerSides>
      </main>

    </Layout.ContainerDesktop>
  )
}

Premium2PageStrategy.canRender = (productContext: Partial<ProductContextState> | undefined) => {
  const productProperties = productContext?.product?.properties
  return productProperties?.find(item => item.name === 'Desc Premium')
}
