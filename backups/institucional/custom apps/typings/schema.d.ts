declare global {
  interface Schema extends SchemaObjectSiteEditor {}
}

export type UiWidget = 'image-uploader' | 'textarea' | 'datetime' | 'select' | 'color';


type StringType = {
  type: 'string'
  title: string
  description?: string
  default?: string
  enum?: string[],
  disabled?: boolean,
  enumNames?: string[],
  widget?: {
    "ui:widget": UiWidget
  }
}

type NumberType = {
  type: 'number',
  title: string,
  description?: string
  default?: number
}

type BooleanType = {
  type: 'boolean',
  title: string,
  description?: string
  default?: boolean
}

export type SchemaObjectProperty = Record<string , SchemaSiteEditor>


export type SchemaObjectSiteEditor = {
  type: 'object';
  dependencies?: {
    contentType: {
      oneOf: Array<{properties: Record< string, Partial<SchemaSiteEditor>>}>
    }
  }
  properties?: SchemaObjectProperty;
}

export type SchemaArraySiteEditor = {
  type: 'array'
  title: string;
  minItems?: number;
  maxItems?: number;
  items: SchemaObjectSiteEditor;
}

export type SchemaSiteEditor = SchemaObjectSiteEditor | SchemaArraySiteEditor | BooleanType | NumberType | StringType


