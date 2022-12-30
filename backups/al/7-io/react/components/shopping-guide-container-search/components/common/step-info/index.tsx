import React from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'
import styles from './styles.css'

export type StepInfoStatus = "present" | "future" | "past" | 'isPossible'

export type StepInfoProps = {
  currentStatus: StepInfoStatus
  label: string
} & CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

export const StepInfo = ({
  currentStatus,
  label,
  className,
  variant = 'primary',
  ...props
}: StepInfoProps) => {
  return (
    <button type='button' {...props} className={commonStylesGenerator('StepInfo', className, variant)}>
      <span className={`${styles[currentStatus]} ${styles.status}`} />
      <span className={styles["containerTitleStepInfo"]}>
        {label}
      </span>
    </button>
  )
}
