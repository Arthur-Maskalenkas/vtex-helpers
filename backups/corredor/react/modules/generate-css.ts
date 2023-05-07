import { applyModifiers } from 'vtex.css-handles'
import { CSS_HANDLES } from './css-handles';

// TODO renderizar algo como
// <div class=container-component-div variation--title>
// <span class=container-element-span container-parent-component-div variation--title>

// </span
// </div>

export type TCssHandles = typeof CSS_HANDLES[number];

export type TOption = {
  suffix?: string[],
  variations?: TCssHandles[],
  resetAllChildrens?: boolean
}

export const generateCSS = (handles: TCssHandles, modifiers: string[], css: any, option?: TOption) => {
  console.log(`🚀 ~ generateCSS ~ option:`, option)

  const extraClass = [
    applyModifiers(css['reset-default-styles'], []),
    ...option?.resetAllChildrens ? [applyModifiers(css['reset-default-styles-all-childrens'], [])] : []
  ]?.join(' ')

  const variations = option?.variations?.map(variation => applyModifiers(css[variation], []))?.join(' ')
  console.log(`🚀 ~ generateCSS ~ variations:`, variations)

  if (!!option?.suffix?.length && option?.suffix?.length > 0) {
    let suffixWithModifiers: string[] = []

    for (let i = 0; i < option.suffix.length; i++) {
      const currentSuffix = option?.suffix?.[i]

      suffixWithModifiers.push(`${currentSuffix}`)
      for (let j = 0; j < modifiers.length; j++) {
        suffixWithModifiers.push(`${currentSuffix}--${modifiers[j]}`)
      }
    }



    return ` ${variations}  ${extraClass} ${applyModifiers(css[handles], [...suffixWithModifiers, 'css-handles'])}`
  }

  return ` ${variations}  ${extraClass} ${applyModifiers(css[handles], [...modifiers, 'css-handles'])} `
}

