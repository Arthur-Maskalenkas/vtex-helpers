import React from 'react'
import { RadioFilterOption, RadioFilterOptionProps } from './variations/input-radio'
import styles from './styles.css'

export type VariantFilterOption = 'button' | 'radio'

export type FilterOptionProps = { variant: 'radio' } & RadioFilterOptionProps


export const FilterOption = ({ variant, ...props }: FilterOptionProps) => {
  return (
    <div className={styles.containerFilterOption}>
      <RadioFilterOption {...props} {...(props as unknown as RadioFilterOptionProps)} />
    </div>


  )
}
