import React from "react"
import { useCssHandles } from "vtex.css-handles"
import { AvantiMenuChildrenProps } from "../../../../typings/types"
import { CSS_HANDLES } from "../../CSS_HANDLES"

export const TitleContainer = ({ children }: AvantiMenuChildrenProps) => {

  const css = useCssHandles(CSS_HANDLES)
  
  return (
    <div className={css['mobile-titleContainer']}>
      {children}
    </div>
  )
}
