import React, { useState, useContext } from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
// @ts-ignore
import { usePixel } from 'vtex.pixel-manager'
import { useMutation } from 'react-apollo'
// @ts-ignore
import { ToastContext } from 'vtex.styleguide'

import { mapCartItemToPixel, OrderForm } from './utils'

import style from './style.css'
import ADD_ITEM from '../../graphql/addItem.graphql'

const TOAST_TIMER = 2000

interface Seller {
  sellerId: string
  sellerName: string
  sellerDefault: boolean
}

export const AddToCartShelf = ({ sellerProp }: any) => {
  const productContextValue = useProduct()
  const productId = productContextValue?.selectedItem?.itemId
  const prodcutSeller = productContextValue?.selectedItem?.sellers[0].sellerId
  const sellers: Seller | any = productContextValue?.selectedItem?.sellers

  const sellerTrue = () => {
    if (sellers?.length > 1) {
      return sellerProp
    }
    return prodcutSeller
  }

  const { setOrderForm } = useOrderForm()
  const [existButton, setExistButton] = useState(true)
  const [limit, setLimit] = useState(false)
  const { push } = usePixel()
  // @ts-ignore
  const { showToast } = useContext(ToastContext)



  function renderButton() {
    return (
      <div className={style.WrapperBuyButton}>
        <button
          className={style.buyButton}
          onClick={() => {
            handleClickButton()
          }}
        >
          Quero Comprar
        </button>
      </div>
    )
  }

  const handleClickButton = async () => {
    await addItem({
      variables: {
        items: [
          {
            id: Number(productId),
            quantity: 1,
            seller: String(sellerTrue()),
          },
        ],
      },
    })
    setExistButton(false)
  }

  const [addItem] = useMutation<OrderForm, any>(ADD_ITEM, {
    onCompleted: (data: any) => {
      const orderFormData = data?.addToCart
      const productName = productContextValue?.product?.productName

      setOrderForm((prevOrderForm: any) => {
        return {
          ...prevOrderForm,
          ...orderFormData,
        }
      })

      const pixelEventItems = orderFormData?.items?.map(mapCartItemToPixel)

      push({
        id: "add-to-cart-button",
        event: 'addToCart',
        items: pixelEventItems,
      })
      showToast({
        message: `Produto ${productName} adicionado ao carrinho.`,
        duration: TOAST_TIMER,
      })
      setLimit(true)
    },
  })


  const classIfQuantityIsVisible = existButton ? 'button' : 'quantity'

  return (
    <>
      <div
        className={style.containerBuyButton}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <div className={style.WrapperButtonContainer}>
          {existButton ? renderButton() : null}
        </div>
        {existButton ? null : (
          <div className={`${style.textAdicionadoContainer}`}>
            <span
              className={`${style.textAdicionado} ${style[classIfQuantityIsVisible]
                }`}
            >
              {limit ? 'Limite atingido' : 'Produto adicionado'}
              {setExistButton(true)}
            </span>
          </div>
        )}
      </div>
    </>
  )
}
