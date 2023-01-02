import React from 'react'
import styles from './styles.css'

import { SliderLayout } from 'vtex.slider-layout'

import { RadioFilterOption, RadioFilterOptionProps } from '../../uncommon/filter-option/variations'

type CollectionInputRadioOptionsProps = {
  name: string,
  items?: RadioFilterOptionProps[]
}

export const CollectionInputRadioOptions = ({ items, name }: CollectionInputRadioOptionsProps) => {
  return (
    <div className={`${styles.containerCollectionInputRadioOptions}`}>
      <ul data-content-desktop={true} className={`${styles.containerListCollectionInputRadioOptions}`}>
        {items?.map((item) => (
          <li key={item.label}>
            <RadioFilterOption  {...item} name={name} />
          </li>
        ))}
      </ul>

      <div data-content-mobile={true} data-content-slider={true}>
        <SliderLayout infinite={false} itemsPerPage={3} fullWidth={true} centerMode={"to-the-left"} showNavigationArrows={"never"} showPaginationDots='never' >
          {items?.map((item) => (
            <li key={item.name}>
              <RadioFilterOption  {...item} name={name} />
            </li>
          ))}
        </SliderLayout>
      </div>
    </div>
  )
}
