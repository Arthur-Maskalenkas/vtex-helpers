import React, { useState } from 'react'
import { ApiSmartHintCommonProps, PagesType } from '../../services/modules/api-manager-smart-hint/types-api-smart-hint'
import { buildApiManagerSmartHint } from '../../services/modules/builders/build-dependencies'
import { useRuntime } from 'vtex.render-runtime'
import { Skeleton } from '../../common'
import { useCssHandles } from 'vtex.css-handles'
import { VTEXProduct } from '../../services/modules/api-manager-smart-hint/types-api-vtex'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { ShelfDesktop, ShelfMobile } from '../../components'
import { getOrderForm } from '../../modules/default/fetch/get-orderform'

export type SmartHintContainerProps = {
  apiProps: {
    pageType: PagesType,
    shCode: string,
    position: string
  },

}

export type ShelfSmartHintProps = {
  products?: VTEXProduct[] | null
  title?: string | null
}

const defaultShelfListProps: ShelfSmartHintProps = {
  products: [],
  title: ''
}

export const ShelfRecommendationsByPage = ({ apiProps, ...summaryProps }: SmartHintContainerProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const runtime = useRuntime()
  const isMobile = runtime?.deviceInfo?.isMobile

  const [shelfList, setShelfList] = useState<ShelfSmartHintProps>(defaultShelfListProps)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  React.useEffect(() => {
    const resolveSmartAPI = async () => {
      try {
        setIsLoading(true)
        const channel = runtime?.deviceInfo?.isMobile ? 'Mobile' : 'Desktop'
        const urlPage = window?.location?.href
        const orderForm = await getOrderForm()

        const args: ApiSmartHintCommonProps = {
          ...apiProps,
          channel,
          urlPage,
          orderForm
        }

        const apiManagerSmartHintContainer = buildApiManagerSmartHint()
        const apiSmartHint = await apiManagerSmartHintContainer?.recommendationByPage(args)

        setShelfList({ products: apiSmartHint?.products, title: apiSmartHint?.title })

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

  const shelfProps: ShelfSmartHintProps = {
    products: shelfList?.products,
    title: shelfList?.title,
    ...summaryProps
  }

  return (
    <div className={generateCSS('container-component', ['smart-hint-container'], css)}>
      {isMobile ? (<ShelfMobile {...shelfProps} />) : (<ShelfDesktop {...shelfProps} />)}
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
