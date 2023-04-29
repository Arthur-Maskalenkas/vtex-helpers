
import React from 'react'
import { Settings } from 'react-slick';
import { applyModifiers } from "vtex.css-handles";

export const parseSpecificationFilter = ({ id, value }: { id: string; value: string }) => `specificationFilter_${id}:${value}`

export const generateSliderQuantity = (quantitytoShowIfPossible: number, items?: any[]) => {
  if (!items?.length || items?.length === 0) {
    return {
      slidesToScroll: 1,
      slidesToShow: 1,
    }
  }

  const quantityItemsFetched = items?.length


  let quantityToShow = quantityItemsFetched < quantitytoShowIfPossible ? quantityItemsFetched : quantitytoShowIfPossible

  if (quantityToShow === quantityItemsFetched && quantityToShow > 1) {
    quantityToShow = quantityToShow - 1
  }

  return {
    slidesToScroll: quantityToShow,
    slidesToShow: quantityToShow,
  }
}






export const generateCommonSliderConfigs = (css: any, data: any[]) => {
  const commonConfig: Settings = {
    speed: 500,
    infinite: true,
    nextArrow: <span className={`${applyModifiers(css['icon'], 'arrow-right')}`}></span>,
    prevArrow: <span className={`${applyModifiers(css['icon'], 'arrow-left')}`}></span>,
    ...generateSliderQuantity(2, data)
  }
  const configsSliderShelf: Settings = {
    ...commonConfig,
    ...generateSliderQuantity(4, data),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          ...commonConfig,
        }
      }
    ]
  }



  return configsSliderShelf
}
