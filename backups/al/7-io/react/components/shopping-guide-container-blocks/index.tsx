import React from 'react'
import { useShoppingGuideContext } from '../../context'
import { BlockContent } from './components/index-components/block-content'
import styles from './styles.css'

export const ShoppingGuideContainerBlocks = () => {
  const { getCurrentDepartament } = useShoppingGuideContext()

  return (
    <ul className={styles.containerShoppingGuideContainerBlocks}>
      {getCurrentDepartament?.blockItems?.filter(block => block.isActive).map((block, index) => {
        return (
          <li key={index}>
            <BlockContent  {...block} />
          </li>
        )
      })}
    </ul>
  )
}
