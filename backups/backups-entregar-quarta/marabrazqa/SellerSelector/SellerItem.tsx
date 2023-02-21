import React from 'react'
import style from './style.css'
import { Seller } from 'vtex.product-context/react/ProductTypes'
import { AddToCartShelf } from './AddToCartShelf'
import GET_SHIPPING from '../../graphql/shippingEstimate.graphql'
import { useQuery } from 'react-apollo'
import { canUseDOM } from 'vtex.render-runtime'
import Loader from './Loader'

interface PropsSeller {
  productId: number
  itemSeller: Seller
  sendButtonValue: string
  hasMoreThanOneChildren: boolean
}

const SellerItem = ({ productId, itemSeller, sendButtonValue, hasMoreThanOneChildren }: PropsSeller) => {
  if (canUseDOM) {

    const sellerId = itemSeller?.sellerId

    const { data: dataShipping, loading } = useQuery(GET_SHIPPING, {
      variables: {
        items: [
          {
            id: productId,
            quantity: 1,
            seller: sellerId,
          },
        ],
        postalCode: sendButtonValue,
        country: 'BRA',
      },
    })

    const shippingPrice = dataShipping?.shipping?.logisticsInfo[0]?.slas[0]?.price ?? 0
    const shippingEstimate = dataShipping?.shipping?.logisticsInfo[0]?.slas[0]?.shippingEstimate
    const parsedShippingPrice = shippingPrice / 100
    const unitPrice = itemSeller?.commertialOffer.Price ?? 0
    const totalPrice = parsedShippingPrice + unitPrice ?? 0

    const unitPriceText = unitPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return (
      <div className={`${style.containerBodySeller} ${hasMoreThanOneChildren ? style.hasMoreThan : ''}`}>
        <div className={style.containerTextSeller}>
          <p className={style.sellerName}>{itemSeller?.sellerName}</p>
          <p className={style.unitPriceSeller}>
            {unitPriceText}
          </p>

          {sendButtonValue === '' || sendButtonValue === null
            ?
            <p className={style.textCepInitial}>digite seu cep acima</p>
            :
            loading ? <Loader />
              :
              shippingEstimate
                ? <p className={style.textDateEstimate}>{shippingEstimate.replace('bd', ' dias úteis')}</p>
                :
                <p className={style.textCepInitial}>Entrega indisponível.</p>
          }
          <p className={style.totalPriceSeller}>
            {totalPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <div className={style.containerAddToCart}>
          {unitPrice === 0 || shippingEstimate === '' ?
            <p className={style.textProdutoIndisponivel}>Produto indispinível</p> : <AddToCartShelf sellerProp={itemSeller?.sellerId} />
          }
        </div>
      </div>
    )
  }
  return null
}
export default SellerItem
