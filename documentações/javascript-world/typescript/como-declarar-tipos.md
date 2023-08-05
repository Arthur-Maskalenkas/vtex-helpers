# Como declarar tipos | arquivos .d.ts


## Componentes reactjs

### declarando o arquivo
```typescript - arquivo.d.ts
export * from 'vtex.rich-text'
import { TextAlignmentValues, TextPositionValues, textAlignmentTypes, textPositionTypes } from 'vtex.rich-text/react/typings/SchemaTypes'

declare module 'vtex.rich-text' {
  interface RichTextProps {
    font?: string,
    text?: string,
    textAlignment?: TextAlignmentValues,
    textColor?: string,
    textPosition?: TextPositionValues,
    htmlId?: string,
    classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
  }

  const RichText: React.FC<RichTextProps>

  export default RichText
}
```

### utilizando os tipos definidos
```typescript - arquivo.tsx
import RichText from 'vtex.rich-text'

import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../modules'

export const RichTexts = () => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={generateCSS('container-component', ['rich-text'], css)}>
      <RichText  />
    </div>
  )
}
```	
