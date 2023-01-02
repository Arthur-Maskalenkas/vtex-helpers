import React from 'react'
import { FigCaption, Figure, RenderIcons } from '../../../../common'
import { InputRadio } from '../../../../common/input-radio'
import styles from './styles.css'

export type RadioFilterOptionProps = {
  icon?: React.ReactNode
  label: string
  id: number | string
  name?: string
  value?: any
}

export const RadioFilterOption = ({ icon, label, id, name = 'any-name', value, ...props }: RadioFilterOptionProps) => {


  return (
    <div className={styles.containerInputRadio}>
      <InputRadio label={label} name={name} id={(id as string)}  {...props} value={value}>
        <Figure label={label} variant="primary">
          {!!icon ? icon : <RenderIcons variant="primary" name="Couch" />}
        </Figure>
      </InputRadio>

      <FigCaption >
        {label}
      </FigCaption>
    </div>
  )
}
