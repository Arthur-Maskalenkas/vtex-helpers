import React from 'react'
import { useProduct, useProductDispatch } from 'vtex.product-context'
import { useBuyBoxContext } from "../../../context";
import { ListRender } from "../slider/list-render";
import { InputText } from "../input-text";
import { StoreTheme } from "../../store-theme";


export const SliderSizes = () => {
  const productContext = useProduct()
  console.log(`🚀 ~ file: slider-sizes.tsx:11 ~ SliderSizes ~ productContext:`, productContext)
  const dispatch = useProductDispatch()
  const { listSizes } = useBuyBoxContext()
  const currentProductSku = productContext?.selectedItem?.itemId ?? ''
  const currentProductId = productContext?.product?.productId ?? ''

  const handleClick = (itemId: string) => {
    const itemToDispatch = productContext?.product?.items?.find(item => item.itemId === itemId)
    dispatch && dispatch({ type: 'SET_SELECTED_ITEM', args: { item: itemToDispatch } });
  }

  return (
    <div className={'container-app-list-selector container-with-border container-app-slider-sizes slider list-selector container size'}>
      <div className="container-title bb-flex bb-space-between">
        <h3 className={'list-title'}>TAMANHO</h3>
        <StoreTheme.Sizebay />
      </div>
      <ListRender
        ifNotHaveSufficientLengthRenderNormalList={true}
        quantitySlidesToShowOnDesktop={6}
        quantitySlidesToShowOnMobile={4}
        items={listSizes ?? []}
        prefixClassName={'size'}
        typeVariation={'size'}>
        {listSizes?.map((item, index) => {
          const isActive = item.itemId === currentProductSku
          const { comp_label = '', itemId = '', comp_isDisabled = true } = item

          return (
            <div key={index} className="list-selector size content">
              <InputText
                value={itemId}
                onChange={(e) => {
                  e.preventDefault()
                  handleClick(e.target.value)
                }}
                isActive={isActive}
                isDisabled={comp_isDisabled}
                id={itemId}
                name={currentProductId}
                text={comp_label}
              />
            </div>
          )
        })}
      </ListRender>
    </div>
  )
}
