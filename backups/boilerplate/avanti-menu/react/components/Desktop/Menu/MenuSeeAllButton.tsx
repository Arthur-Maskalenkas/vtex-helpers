import React from "react"
import { applyModifiers, useCssHandles } from "vtex.css-handles"
import { useAvantiMenuDesktop } from "../../../context/AvantiMenuContext"
import { OthersProps } from "../../../typings/types"
import { CSS_HANDLES } from "../CSS_HANDLES"

export const MenuSeeAllButton = ({ url, modifier }: OthersProps) => {
  
  const css = useCssHandles(CSS_HANDLES)
  const { props } = useAvantiMenuDesktop()

  return (
    <a href={url} className={applyModifiers(css['desktop-menuSeeAllButton'], modifier ? modifier : '')}>
      {props.seeAllButton}
    </a>
  )
}
