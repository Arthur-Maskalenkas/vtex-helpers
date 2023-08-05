import React from 'react'
import { useBuyBoxContext } from "../../../context";

export const Wishlist = () => {
  const { SlotComponentsWishlist } = useBuyBoxContext()
  return (
    <div className="container-app-wishlist">
      <SlotComponentsWishlist />
    </div>
  )
}
