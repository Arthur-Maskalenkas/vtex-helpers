import React from 'react'
import styles from './styles.css'
import { FigCaption, Figure } from '../../../../common'

export type ResultProps = {
  icon?: React.ReactNode
  label: string
}

export const Result = ({ icon, label }: ResultProps) => {
  return (
    <div className={styles.containerResult}>
      <div className={styles.containerImage}>

        <Figure label={label} variant="primary">
          {icon}
        </Figure>
      </div>

      <FigCaption >
        {label}
      </FigCaption>
    </div >
  )
}
