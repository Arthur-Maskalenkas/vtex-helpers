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
