import React from 'react'
import styles from './styles.css'

import { SliderLayout } from 'vtex.slider-layout'

import { ResultProps, Result } from '../../uncommon/filter-option/variations'

type CollectionResultProps = {
  items?: ResultProps[]
}

export const CollectionResult = ({ items }: CollectionResultProps) => {
  return (
    <div className={`${styles.containerCollectionResult}`}>
      <ul data-content-desktop={true} className={`${styles.containerListCollectionResult}`}>
        {items?.map((item, index) => (
          <li key={index}>
            <Result  {...item} />
          </li>
        ))}
      </ul>



      <div data-content-mobile={true} data-content-slider={true}>
        <SliderLayout infinite={true} centerModeSlidesGap={10} itemsPerPage={2} fullWidth={true} centerMode={"to-the-left"} showNavigationArrows={"never"} showPaginationDots='never' >
          {items?.map((item, index) => (
            <li key={index}>
              <Result  {...item} />
            </li>
          ))}
        </SliderLayout>
      </div>
    </div>
  )
}
