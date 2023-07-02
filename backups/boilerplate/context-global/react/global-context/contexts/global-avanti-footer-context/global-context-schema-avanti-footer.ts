import { CMSHelper } from './../../cms-helper';
import { SchemaObjectSiteEditor } from "../../cms-helper";


export const GlobalContextSchemaAvantiFooter = (): SchemaObjectSiteEditor => ({
  type: 'object',
  properties: {

    _screen_config_logo: {
      ...CMSHelper.generateDisableOption(),

      ...CMSHelper.generateImagePage('Configurar logo')
    },

    _screen_config_banner: CMSHelper.generateImagePage('Configurar banner'),

    _screen_config_attendance_text_column: {
      type: 'array',
      title: 'Configurar coluna de texto Atendimento',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          freeText: {
            type: 'string',
            title: "Texto",
            description: "Texto que será exibido na cikyba de texto Atendimento.",
            widget: {
              "ui:widget": "textarea"
            }
          }
        }
      }
    },

    _screen_config_text_copyright: {
      title: 'Configurar texto copyright',
      type: 'array',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {

          text: {
            title: "Texto Copyright",
            type: 'string',
            widget: {
              "ui:widget": "textarea"
            }
          }
        }
      }
    },

    _screen_config_columns_links: {
      title: 'Configurar colunas de links',
      type: 'array',
      minItems: 1,
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          items: {
            title: 'Lista de colunas',
            type: 'array',
            maxItems: 10,

            items: {
              type: 'object',
              properties: {
                ...CMSHelper.generateDisableOption(),

                ...CMSHelper.generateResponsiveOption(),

                __editorItemTitle: {
                  title: 'Titulo',
                  type: 'string',
                  description: 'Título que será exibido acima da coluna.'
                },

                items: {
                  type: 'array',
                  title: 'Lista de links',
                  maxItems: 10,
                  items: {
                    type: 'object',
                    properties: {
                      ...CMSHelper.generateDisableOption(),

                      ...CMSHelper.generateResponsiveOption(),

                      __editorItemTitle: {
                        title: 'Titulo',
                        type: 'string',
                        description: 'Título que será exibido no conteúdo.'

                      },

                      href: {
                        title: "URL",
                        type: "string",
                        description: 'URL de destino'
                      },

                      target: {
                        title: 'Abrir link em uma nova aba?',
                        type: 'boolean',
                        description: 'Ao clicar no link o usuario sera redirecionado para uma nova aba',
                        default: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },

    _screen_config_columns_icons: {
      title: 'configurar colunas de icones',
      type: 'array',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          items: {
            title: 'Lista de colunas',
            type: 'array',
            maxItems: 5,

            items: {
              type: 'object',
              properties: {
                ...CMSHelper.generateDisableOption(),

                ...CMSHelper.generateResponsiveOption(),

                __editorItemTitle: {
                  title: 'Titulo',
                  type: 'string',
                  description: 'Título que será exibido.'
                },

                items: {
                  type: 'array',
                  title: 'Lista de icones',

                  items: {
                    type: 'object',
                    properties: {
                      ...CMSHelper.generateDisableOption(),

                      ...CMSHelper.generateResponsiveOption(),
                      __editorItemTitle: {
                        title: 'Título',
                        type: 'string',
                        description: 'Título que será exibido no site editor e também ao passar o mouse sobre o ícone.'
                      },
                      src: {
                        title: "Ícone",
                        type: "string",
                        widget: {
                          "ui:widget": "image-uploader"
                        }
                      },
                      alt: {
                        title: "Texto Alternativo",
                        type: "string",
                        description: 'Texto que descreve o conteúdo do ícone para acessibilidade e SEO.'
                      },

                      href: {
                        title: "URL",
                        type: "string",
                        description: 'URL de destino. Campo não obrigatorio.'
                      },

                      target: {
                        title: 'Abrir link em uma nova aba?',
                        type: 'boolean',
                        description: 'Ao clicar no link o usuario sera redirecionado para uma nova aba',
                        default: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
})



