import React from 'react'
import { useBuyBoxContext } from '../../../context'

export const Share = () => {
  const { SlotComponentShare } = useBuyBoxContext()

  return (
    <div className="container-app-share no-reset-children">
      <SlotComponentShare />
    </div>
  )
}
