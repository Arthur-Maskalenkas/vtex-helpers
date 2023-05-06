import { applyModifiers } from 'vtex.css-handles'
import { CSS_HANDLES } from './css-handles';


export type TCssHandles = typeof CSS_HANDLES[number];

export type TOption = {
  suffix?: string[],
  resetAllChildrens?: boolean
}

export const generateCSS = (handles: TCssHandles, modifiers: string[], css: any, option?: TOption) => {

  const extraClass = [
    applyModifiers(css['reset-default-styles'], []),
    ...option?.resetAllChildrens ? [applyModifiers(css['reset-default-styles-all-childrens'], [])] : []
  ].join(' ')

  if (!!option?.suffix?.length && option?.suffix?.length > 0) {
    let suffixWithModifiers: string[] = []

    for (let i = 0; i < option.suffix.length; i++) {
      suffixWithModifiers.push(`${option.suffix[i]}`)
      for (let j = 0; j < modifiers.length; j++) {
        suffixWithModifiers.push(`${option.suffix[i]}--${modifiers[j]}`)
      }
    }

    return `${applyModifiers(css[handles], [...suffixWithModifiers, 'css-handles'])} ${extraClass}`
  }

  return `${applyModifiers(css[handles], [...modifiers, 'css-handles'])}  ${extraClass}`
}

