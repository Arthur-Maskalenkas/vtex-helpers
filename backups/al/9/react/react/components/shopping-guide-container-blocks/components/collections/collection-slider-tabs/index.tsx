import React from 'react'
import { __SCHEMA_SITE_EDITOR_DEFAULT_TAB } from '../../../../../context/_interfaces/_schemas'
import { Button } from '../../common'
import { SliderLayout } from 'vtex.slider-layout'
import styles from './styles.css'


export type CollectionSliderTabsProps = {
  items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[],
  currentTab: number,
  setCurrentTab: (index: number) => void
}

export const CollectionSliderTabs = ({ items, currentTab, setCurrentTab }: CollectionSliderTabsProps) => {
  return (
    <div className={styles.containerBlockCollectionSliderTabs}>
      <SliderLayout infinite={true} itemsPerPage={2} fullWidth={true} centerMode={"to-the-left"} showNavigationArrows={"never"} showPaginationDots='never' >
        {items?.map((tab, index) => {
          const logicForActiveTab = currentTab === index
          return (
            <li key={index}>
              <Button variant='tab' isActive={logicForActiveTab}
                onClick={() => setCurrentTab(index)}>{tab.__editorItemTitle}</Button>
            </li>
          )
        })}
      </SliderLayout>
    </div>
  )
}
