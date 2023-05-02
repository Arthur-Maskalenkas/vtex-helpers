import React, { useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'
// @ts-ignore
import badge from './badge.svg'
import { generateCSS, CSS_HANDLES } from '../../../../modules'
import { RefinedDataResponseGetSku, RefinedDataResponseGetSkuItem } from '../../modules/refined-data'
import { useProductDispatch } from 'vtex.product-context'
// @ts-ignore
import { useOrderItems } from 'vtex.order-items/OrderItems'
import { ToastContext, ToastContextType } from 'vtex.styleguide'
import { Skeleton } from '../../../../common'

export type AddToCartProps = {
  skuList: RefinedDataResponseGetSku
}

export const AddToCart = ({ skuList }: AddToCartProps) => {
  const { showToast } = useContext<ToastContextType>(ToastContext)
  const { addItems } = useOrderItems()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [loadingAddCartFn, setLoadingAddCartFn] = React.useState<boolean>(false)
  const dispathProduct = useProductDispatch()
  const css = useCssHandles(CSS_HANDLES)

  const handleOpenSku = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setIsOpen(!isOpen)

    dispathProduct?.({ type: 'SET_BUY_BUTTON_CLICKED', args: { clicked: true } })
  }

  const handleSku = async (e: React.MouseEvent<HTMLButtonElement>, sku: RefinedDataResponseGetSkuItem) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      setLoadingAddCartFn(true)
      await addItems([{ id: String(sku?.id), quantity: 1, seller: '1', }])
      showToast({
        message: `Produto adicionado a sacola com sucesso.`,
        duration: 2500,
      })
    } catch (error) {
      console.error(`🚀`, error)
      showToast({
        message: `Houve algum erro ao adicionar produto na sacola. Tente novamente mais tarde.`,
        duration: 2500,
      })
    } finally {
      setLoadingAddCartFn(false)
      setIsOpen(false)
    }

  }


  return (
    <div className={generateCSS('container-component', ['add-to-cart'], css)}>
      <div className={generateCSS('container-content', ['add-to-cart', `${isOpen ? 'hidden-button' : 'show-button'}`], css)}>
        <button
          onClick={handleOpenSku}
          className={generateCSS('button', ['add-to-cart', 'open-sku'], css)}
          title={"adicionar a sacola"}>
          <img src={badge} />

          <div className={generateCSS('container-content', ['add-to-cart', 'hidden'], css)}>
            <span className={generateCSS('text', ['add-to-cart', 'showOnClick'], css)}>
              Adicionar a sacola
            </span>
          </div>

        </button>
      </div>

      <ul className={generateCSS('list', ['add-to-cart', 'sku', `${isOpen ? 'opened' : 'closed'}`], css, { suffix: ['sku'] })} onMouseLeave={() => setIsOpen(false)}>
        {loadingAddCartFn && <Skeleton title='Produto sendo adicionado a sacola.' />}
        {skuList?.map((item, index) => {
          return (<li
            key={index} className={generateCSS('list-item', ['add-to-cart', 'sku'], css)}>
            <button
              onClick={e => handleSku(e, item)}
              className={generateCSS('button', ['add-to-cart', 'add-sku'], css)}
              title={`Tamanho ${item?.size}`}>
              {item?.size}
            </button>
          </li>)
        })}
      </ul>

    </div>
  )
}
