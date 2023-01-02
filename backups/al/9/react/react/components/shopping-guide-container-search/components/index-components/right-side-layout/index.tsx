import React from 'react'
import { useShoppingGuideContext } from '../../../../../context'
import { CollectionInputRadioOptions } from '../../collections/collection-filter-option'
import { RenderIcons } from '../../common'
import styles from './styles.css'

export const RightSideLayout = () => {
  const { getCurrentStep } = useShoppingGuideContext()

  return (
    <div className={styles.containerRightSideLayout}>
      <CollectionInputRadioOptions name={getCurrentStep?.__editorItemTitle || 'any_name'} items={getCurrentStep?.items?.map((item, index) =>
      ({
        label: item.__editorItemTitle,
        value: {
          ProductFieldReferenceValue: item?.ProductFieldReferenceValue,
          ProductFieldReferenceID: item?.ProductFieldReferenceID
        },
        id: index,
        icon: <RenderIcons variant='primary' name='Couch' />
      })
      )} />
    </div>
  )
}
