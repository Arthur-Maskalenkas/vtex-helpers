import React from 'react'
import { useShoppingGuideContext } from '../../../../../context'
import { WordRenderer } from '../../common'
import styles from './styles.css'

export const LeftSideLayout = () => {
  const { getCurrentStep } = useShoppingGuideContext()


  return (
    <div className={styles.containerLeftSideLayout}>
      <WordRenderer>
        {getCurrentStep?.title}
      </WordRenderer>

      <WordRenderer as='text'>
        {getCurrentStep?.description}
      </WordRenderer>
    </div>

  )
}
