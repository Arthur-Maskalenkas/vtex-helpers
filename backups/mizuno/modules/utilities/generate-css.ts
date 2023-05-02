import { applyModifiers } from 'vtex.css-handles'

export const CSS_HANDLES = [
  "container-page",
  "container-section",
  "container-children-section",
  "container-component",
  "container-content",

  "schema-style",
  "identifier",

  "reset-default-styles",
  "reset-default-styles-all-childrens",

  "title",
  "text",
  "label",
  "button",
  "icon",
  "link",
  "form",
  "list",
  "list-item",
  'input',
  "image",

  "other",

  "desktop-only",
  "mobile-only"
] as const



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

