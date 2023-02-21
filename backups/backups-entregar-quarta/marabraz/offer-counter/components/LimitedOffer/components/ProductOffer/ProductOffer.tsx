import React from "react"
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = [
  "classe"
]

export function ProductOffer({ children }: any) {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.classe}>
      {children}
    </div>
  )
}
