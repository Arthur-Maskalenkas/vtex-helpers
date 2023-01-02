import React from 'react'
import { useShoppingGuideContext } from '../../../../../context'
import { verifyStepPosition } from '../../../../../context/helpers'
import { ENUM_ACTIONS } from '../../../../../context/reducer'
import { StepInfo } from '../../common'

import styles from './styles.css'


export const CollectionStepsInfo = () => {
  const { getCurrentStep, getStepList, dispatchStep, getMaxSteps } = useShoppingGuideContext()

  return (
    <ul className={styles.containerCollectionStepsInfo}>
      {getStepList?.map((item, index) => (
        <li key={index}>
          <StepInfo
            onClick={() => dispatchStep(ENUM_ACTIONS.GO_TO_STEP, index)}
            label={item.__editorItemTitle}
            className={(index === 0 || index >= 0) && index <= getMaxSteps ? 'isPossible' : ''}
            currentStatus={verifyStepPosition(getCurrentStep?.currentPosition || 0, index, getMaxSteps)} />
        </li>
      ))}
    </ul>
  )
}
