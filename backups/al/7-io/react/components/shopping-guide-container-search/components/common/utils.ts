import { ReactNode } from 'react'

export type CommonProps<VariantType = 'primary', TagType = keyof HTMLElementTagNameMap> = {
  as?: TagType
  className?: string
  children?: ReactNode
  variant?: VariantType
}

export const transformWordsToDashCase = (word: string) => {
  return word.toLowerCase().replace(/\s/g, '-')
}


export const commonStylesGenerator = (componentName: string, ...restClass: any[]) => {
  let classNames: any = []

  const STORE_NAME = 'lojasmarabrazqa-store-theme'
  const STORE_VERSION = '3-x'

  restClass?.forEach((className) => {
    if (className?.includes(STORE_NAME)) {
      classNames?.push(className)
    } else {
      classNames?.push(`${STORE_NAME}-${STORE_VERSION}-${className}`)
    }
  })

  classNames.push(`${STORE_NAME}-${STORE_VERSION}-container${componentName}`)

  return classNames?.join(' ')
}