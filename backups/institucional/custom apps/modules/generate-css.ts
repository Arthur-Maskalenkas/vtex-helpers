import { applyModifiers } from 'vtex.css-handles'
import { CSS_HANDLES } from './css-handles';


export type TCssHandles = typeof CSS_HANDLES[number];



export const generateCSS = (handles: TCssHandles, modifiers: string[], css: any) => {

  return `${applyModifiers(css[handles], [...modifiers])} ${css['handled']} `
}

