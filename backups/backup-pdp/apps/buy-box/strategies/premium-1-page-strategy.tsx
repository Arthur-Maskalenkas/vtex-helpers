import React, { useEffect } from 'react'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { PageStrategyProps } from './types'
import { Layout } from "../../../components/layout";
import { useRuntime } from 'vtex.render-runtime'
import { ContainerLeftSide } from '../../../components/layout/container-left-side';
import { ContainerRightSide } from '../../../components/layout/container-right-side';
import { Vtex } from "../../../components/vtex";
import { StoreTheme } from "../../../components/store-theme";
import { Common } from "../../../components/commons";

export const Premium1PageStrategy = ({ productContext }: PageStrategyProps) => {

  const { deviceInfo: { isMobile } } = useRuntime()

  useEffect(() => {
    const handleResize = () => {

      const containerRightElement: any = document.querySelector('.container-app-container-right-side')
      const containerLeftElement: any = document.querySelector('.container-app-container-right-side')


      if (containerLeftElement && containerRightElement) {
        // const heightMenu = 100
        const heightMenu = 0

        const height = window.innerHeight - heightMenu;
        containerRightElement.style.maxHeight = `${height}px`;
        containerRightElement.style.height = '100% !important'
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [productContext?.product?.productReference]);


  if (isMobile) {
    return (
      <Layout.ContainerMobile>
        <main className='container-main-content'>
          <div className='container-breadcrumb'>

            <div className={"bb-flex bb-space-between"}>
              <Vtex.Breadcrumb />
              <StoreTheme.Wishlist />
            </div>
          </div>

          <Common.Title />

          <Layout.Container alignItems='center' direction='row' justifyContent='flex-start'>
            <StoreTheme.ProductRatingSummary />
            <StoreTheme.Share />
          </Layout.Container>

          <div className='container-prices'>
            <Vtex.OldPrice />
            <Layout.Container alignItems='center' direction='row' justifyContent='space-between'>
              <Vtex.SellingPrice />
              <Vtex.Installments />
            </Layout.Container>
          </div>


          <Vtex.SliderMainImages />

          <div className='container-sliders'>
            <Layout.Container childrensWithBorder={true}>
              <Common.SliderColors />
              <Common.SliderSizes />
              <StoreTheme.CalculateShipping />
            </Layout.Container>
          </div>

          <div className='container-promotion-and-add-to-cart'>
            <Common.ProductPromotion />
            <Common.AddToCart />
          </div>
        </main>

        <Common.HtmlRender />

        <StoreTheme.ProductReviews />
        <StoreTheme.ShelfProduct />
        <StoreTheme.FloatBuyBox />
      </Layout.ContainerMobile>
    )
  }

  return (
    <Layout.ContainerDesktop classContainer='premium-1-page'>
      <main className='container-main-content'>
        <Layout.ContainerSides>
          <ContainerLeftSide>
            <Vtex.SliderMainImages />
            <Common.HtmlRender />
          </ContainerLeftSide>

          <ContainerRightSide>
            <Layout.Container withGutter={true} flexGrow='1'>

              <div className='container-breadcrumb'>
                <Layout.Container alignItems='center' direction='row' justifyContent='space-between'>
                  <Vtex.Breadcrumb />
                  <StoreTheme.Wishlist />
                </Layout.Container>
              </div>


              <Layout.Container>

                <Common.Title />
                <Layout.Container className='container-raintg-and-share' alignItems='center' direction='row' >
                  <StoreTheme.ProductRatingSummary />
                  <StoreTheme.Share />
                </Layout.Container>

              </Layout.Container>
            </Layout.Container>

            <Layout.Container>
              <Layout.Container withGutter={true}>
                <div className='container-prices'>
                  <Vtex.OldPrice />
                  <Layout.Container alignItems='center' direction='row' justifyContent='space-between'>
                    <Vtex.SellingPrice />
                    <Vtex.Installments />
                  </Layout.Container>
                </div>

                <Layout.Container
                  childrensWithBorder={true}
                  className='container-sliders'>
                  <Common.SliderColors />
                  <Common.SliderSizes />
                  <StoreTheme.CalculateShipping />
                </Layout.Container>

              </Layout.Container>
              <Layout.Container className='layout-buy-button'>
                <Layout.Container withGutter={true}>
                  <Common.ProductPromotion />
                </Layout.Container>
                <Common.AddToCart />
              </Layout.Container>
            </Layout.Container>
          </ContainerRightSide>
        </Layout.ContainerSides>

        <StoreTheme.ProductReviews />
        <StoreTheme.ShelfProduct />
        <StoreTheme.FloatBuyBox />
      </main>

    </Layout.ContainerDesktop>
  )
}


Premium1PageStrategy.canRender = (productContext: Partial<ProductContextState> | undefined) => {
  const productProperties = productContext?.product?.properties
  return productProperties?.find(item => item.name === 'Descrição Produto Premium')
}
