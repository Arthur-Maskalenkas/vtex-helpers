import {StepInfoStatus} from "../components/shopping-guide-container-search/components/common"


export const increaseCurrentPosition = (list: any[]): any[] => {
  return list.map((item, index) => {
    return {
      ...item,
      currentPosition: index
    }
  })
}

export const verifyStepPosition = (currentStepPosition: number, index: number, maxSteps: number): StepInfoStatus => {
  if (currentStepPosition == index) {
    return 'present'
  }

  if (maxSteps > index) {
    return 'past'
  }


  if (index > currentStepPosition) {
    return 'future'
  }

  return 'past'
}