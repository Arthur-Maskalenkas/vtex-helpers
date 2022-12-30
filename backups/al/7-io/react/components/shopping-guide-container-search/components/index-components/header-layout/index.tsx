import React from 'react'
import { useShoppingGuideContext } from '../../../../../context'
import { WordRenderer } from '../../common'
import styles from './styles.css'

export const HeaderLayout = () => {
  const { getCurrentDepartament } = useShoppingGuideContext()


  return (
    <div className={styles.containerHeaderLayout}>
      <WordRenderer>
        {getCurrentDepartament?.__editorItemTitle}
      </WordRenderer>

      <WordRenderer as='text'>
        {getCurrentDepartament?.description}
      </WordRenderer>

    </div>
  )
}
