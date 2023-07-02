import React from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { useAvantiMenuMobile } from "../../../context/AvantiMenuContext"
import { OthersProps } from "../../../typings/types"
import { CSS_HANDLES } from "../CSS_HANDLES"

export const MenuSeeAllButton = ({ url, modifier }: OthersProps) => {
  
  const css = useCssHandles(CSS_HANDLES)
  const { props } = useAvantiMenuMobile()

  return (
    <a href={url} className={applyModifiers(css['mobile-menuSeeAllButton'], modifier ? modifier : '')}>
      {props.seeAllButton}
    </a>
  )
}
