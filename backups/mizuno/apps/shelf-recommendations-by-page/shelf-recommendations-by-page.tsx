import React, { useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { Skeleton } from '../../common'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { ShelfDesktop, ShelfMobile } from '../../components'
import { getOrderForm } from '../../modules/default/fetch/get-orderform'
import { SmartHintUseCaseGetRecommendationByPageWithProduct } from '../../services/domain/useCases'
import { generateNormalizeGetRecommendationByPageWithProduct } from '../../services/utilities'
import { ResponseRouteNormalize } from '../../services/presentation'

export type SmartHintContainerProps = {
  apiProps: {
    pageType: SmartHintUseCaseGetRecommendationByPageWithProduct.PageType,
    shCode: string,
    position: string
  },

}

export const ShelfRecommendationsByPage = ({ apiProps }: SmartHintContainerProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const runtime = useRuntime()
  const isMobile = runtime?.deviceInfo?.isMobile

  const [shelfList, setShelfList] = useState<ResponseRouteNormalize>({ recommendations: [] })
  console.log(`🚀 ~ ShelfRecommendationsByPage ~ shelfList:`, shelfList)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  React.useEffect(() => {
    const resolveSmartAPI = async () => {
      try {
        setIsLoading(true)
        const channel = runtime?.deviceInfo?.isMobile ? 'Mobile' : 'Desktop'
        const urlPage = window?.location?.href
        const orderForm: any = await getOrderForm()

        const args: SmartHintUseCaseGetRecommendationByPageWithProduct.Params = {
          apiParams: {
            ...apiProps,
            channel,
            urlPage,
          },
          orderForm
        }

        const apiManagerSmartHintContainer = generateNormalizeGetRecommendationByPageWithProduct()
        const apiSmartHint = await apiManagerSmartHintContainer?.handles(args)

        if (!apiSmartHint?.recommendations) {
          return
        }
        const mockedApi = {
          recommendations: [...apiSmartHint?.recommendations, ...apiSmartHint?.recommendations]
        }
        console.log(`🚀 ~ resolveSmartAPI ~ mockedApi:`, mockedApi)

        setShelfList(mockedApi)
        console.log(`🟢🟢🟢🟢🟢 ~ resolveSmartAPI ~ products:`, apiSmartHint)

      } catch (error) {
        console.error('🔴🔴🔴🔴', error)
      } finally {
        setIsLoading(false)
      }
    }

    resolveSmartAPI()

    return () => { };
  }, [runtime, window?.location?.href])

  if (isLoading) {
    return (
      <Skeleton height={300} />
    )
  }


  return (
    <div className={generateCSS('container-component', ['smart-hint-container'], css)}>
      {isMobile
        ? (<ShelfMobile recommendations={shelfList?.recommendations} />)
        : (<ShelfDesktop recommendations={shelfList?.recommendations} />)}
    </div>
  )
}


ShelfRecommendationsByPage.schema = {
  "title": "Tipo De Recomendação",
  "type": "string",
  "enum": [
    "1",
  ],
  "enumNames": [
    "2",
  ],
  "default": "1"
}
