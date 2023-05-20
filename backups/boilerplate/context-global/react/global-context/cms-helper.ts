export class CMSHelper {

  public static thisPageIsSiteEditor(): boolean {
    return window?.location?.href?.includes('siteEditor')
  }

  public static thisIsDevWorkspace(): boolean {
    const url = window?.location?.href;

    const regex = /^https?:\/\/([a-z0-9]+)--([a-z0-9]+)\.myvtex\.com\/.*__siteEditor/;

    return regex.test(url);
  }

  public static generatePage(title: string, content: any): any {
    return {
      title,
      type: 'array',
      maxItems: 1,
      items: content
    }
  }

  public static generateImageAttrs(): SchemaObjectProperty {
    return {
      srcDesktop: {
        title: "Imagem Desktop",
        type: "string",
        widget: {
          "ui:widget": "image-uploader"
        }
      },
      srcMobile: {
        title: "Imagem Mobile",
        type: "string",
        widget: {
          "ui:widget": "image-uploader"
        }
      },
      alt: {
        title: "Descrição da imagem",
        type: "string"
      }
    }
  }

  public static generateImagePage(title: string = 'Configurar imagem'): SchemaObjectProperty {
    return {
      _screen_image: {
        type: "array",
        title,
        maxItems: 1,
        items: {
          type: "object",
          properties: {
            srcDesktop: {
              title: "Imagem Desktop",
              type: "string",
              widget: {
                "ui:widget": "image-uploader"
              }
            },
            srcMobile: {
              title: "Imagem Mobile",
              type: "string",
              widget: {
                "ui:widget": "image-uploader"
              }
            },
            alt: {
              title: "Descrição da imagem",
              type: "string"
            }
          }
        }
      }
    }
  }
}




type StringType = {
  type: 'string'
  title: string
  description?: string
  default?: string
  enum?: string[],
  enumNames?: string[],
  widget?: {
    "ui:widget": "textarea" | "image-uploader"
  }
}

type NumberType = {
  type: 'number',
  title: string,
  description?: string
  default?: string
}

type BooleanType = {
  type: 'boolean',
  title: string,
  description?: string
  default?: boolean
}

export type SchemaObjectProperty = Record<string, SchemaSiteEditor>

export type SchemaSiteEditor = SchemaObjectSiteEditor | SchemaArraySiteEditor | BooleanType | NumberType | StringType

export type SchemaObjectSiteEditor = {
  type: 'object';
  properties: SchemaObjectProperty;
}

export type SchemaArraySiteEditor = {
  type: 'array'
  title: string;
  minItems?: number;
  maxItems?: number;
  items: SchemaObjectSiteEditor;
}


