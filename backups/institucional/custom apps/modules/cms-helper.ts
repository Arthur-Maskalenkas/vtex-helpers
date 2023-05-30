import { SchemaArraySiteEditor, SchemaObjectProperty, SchemaSiteEditor } from "../typings/schema";

export class CMSHelper {

  public static thisPageIsSiteEditor(): boolean {
    return window?.location?.href?.includes('siteEditor')
  }

  public static thisIsDevWorkspace(): boolean {
    const url = window?.location?.href;

    const regex = /^https?:\/\/([a-z0-9]+)--([a-z0-9]+)\.myvtex\.com\//;

    return regex.test(url);
  }

  public static thisIsDevWorkspaceOnSiteEditor(): boolean {
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


export type DefaultAttributes = 'title' | 'description' | 'text'

export class CMSAttributesHelper {
  public static generateEditorItemTitle(title = 'Titulo site editor', description = 'Titulo que será utilizado no site editor'): SchemaSiteEditor {
    return {
        type: 'string',
        title: Boolean(title) ? title : 'Titulo site editor',
        description: Boolean(description) ? description : 'Titulo que será utilizado no site editor'
    }
  }

  public static generateBanner(): SchemaArraySiteEditor {
    return {
      title: 'Configurar banner',
      type: 'array',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {

          srcDesktop: {
            title: "Banner Desktop",
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          srcMobile: {
            title: "Banner Mobile",
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          alt: {
            title: "Descrição",
            description: 'Descrição que será exibida caso a imagem não carregue',
            type: "string"
          },

          titleContent: {
            type: "string",
            title: "Titulo Imagem",
            description: 'Titulo que será exibido após passar o mouse na imagem.'
          },

          href: {
            type: "string",
            title: 'Link redirecionamento',
            description: 'Link que o usuario será redirecionado após clicar. Caso não preenchido, o usuario não será redirecionado. Exemplo: \'/sobre-nos\''
          },

          _target: {
            type: 'string',
            title: 'Comportamento redirecionamento',
            enum: [
              "_blank",
              "_self"
            ],

            enumNames: [
              "Abrir em uma nova aba",
              "Abrir na mesma aba"
            ]
          }
        }
      }

    }

  }


  public static generateResponsiveImage(): SchemaArraySiteEditor {
    return {
      title: 'Configurar imagem',
      type: 'array',
      maxItems: 1,
      items: {
        type: 'object',
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
        title: "Descrição",
        description: 'Descrição que será exibida caso a imagem não carregue',
        type: "string"
      },

      titleContent: {
        type: "string",
        title: "Titulo Imagem",
        description: 'Titulo que será exibido após passar o mouse na imagem.'
      },

      href: {
        type: "string",
        title: 'Link redirecionamento',
        description: 'Link que o usuario será redirecionado após clicar. Caso não preenchido, o usuario não será redirecionado. Exemplo: \'/sobre-nos\''
      },

      _target: {
        type: 'string',
        title: 'Comportamento redirecionamento',
        enum: [
          "_blank",
          "_self"
        ],

        enumNames: [
          "Abrir em uma nova aba",
          "Abrir na mesma aba"
        ]
      }
    }
  }

  }

  }

  public static generateDefaultAttributes(type: DefaultAttributes, title?:string, description?: string ):SchemaSiteEditor {
    const typeKeys: Record<DefaultAttributes, SchemaSiteEditor> = {
      title: {
        type: 'string',
        title: title ?? 'Titulo',
        description: description ?? 'Titulo do conteúdo'
      },
      description: {
        type: 'string',
        title: title ?? 'Descrição',
        description: description ?? 'Descrição do conteúdo',
        widget: {
          "ui:widget": "textarea"
        }
      },

      text: {
        type: 'string',
        title: title ?? 'Texto',
        description: description ?? 'Texto do conteúdo',
        widget: {
          "ui:widget": "textarea"
        }
      }
    }


    return typeKeys?.[type]
  }
}