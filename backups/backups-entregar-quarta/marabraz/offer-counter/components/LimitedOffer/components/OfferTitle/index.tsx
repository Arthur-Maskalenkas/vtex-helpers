import React from "react"
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["countdownText", "countdownStrong"] as const

const OfferTitle = () => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <span className={handles.countdownText}>
      Essa oferta{" "}
      <strong className={handles.countdownStrong}>expira em: </strong>
    </span>
  )
}

export default OfferTitle
