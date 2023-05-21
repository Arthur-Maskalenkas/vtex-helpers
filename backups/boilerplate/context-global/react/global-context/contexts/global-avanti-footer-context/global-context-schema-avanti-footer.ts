import { SchemaArraySiteEditor, SchemaObjectSiteEditor } from "../../cms-helper";

const buildIconSection = (titleSection: string, haveHrefOnImage: boolean): SchemaArraySiteEditor => {
  return {
    type: 'array',
    title: `Configurar sessão ${titleSection}`,
    maxItems: 1,
    items: {
      type: 'object',
      properties: {
        __editorItemTitle: {
          title: 'Título',
          type: 'string',
          description: 'Título que será exibido acima da lista dos ícones.'
        },
        items: {
          type: 'array',
          title: 'Lista de ícones.',
          items: {
            type: 'object',
            properties: {
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

              ...(haveHrefOnImage ? {
                href: {
                  title: "URL do Link",
                  type: "string",
                  description: 'URL de destino'
                }
              } :
                {}
              )
            }
          }
        }
      }
    }
  };
};

export const GlobalContextSchemaAvantiFooter = (): SchemaObjectSiteEditor => ({
  type: 'object',
  properties: {
    _screen_config_social_links: buildIconSection('redes sociais', true),

    _screen_config_payment_methods: buildIconSection('formas de pagamento', false),

    _screen_config_security: buildIconSection('seguraça', false),

    _screen_config_logo: {
      type: 'array',
      title: 'Configurar logo',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Título',
            type: 'string',
            description: 'Título que sera exibido ao passar o mouse sobre a imagem.'
          },

          srcDesktop: {
            title: "Imagem desktop",
            description: 'Imagem exibida em dispositivos desktop',
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },

          srcMobile: {
            title: "Imagem mobile",
            description: 'Imagem exibida em dispositivos mobile',
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },

          alt: {
            title: "Texto Alternativo",
            type: "string",
            description: 'Texto que descreve o conteúdo da imagem para acessibilidade e SEO.'
          }
        }
      }
    },

    _screen_config_about_store: {
      type: 'array',
      title: 'Configurar coluna de texto',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          freeText: {
            type: 'string',
            title: "Texto",
            description: "Texto que será exibido na sessão 'sobre a loja'. É possivel utilizar tanto tags HTML quanto markdown para manipulação dos textos.",
            widget: {
              "ui:widget": "textarea"
            }
          }
        }
      }
    },

    _screen_config_other_section: {
      title: 'Configurar outras sessões',
      type: 'array',
      maxItems: 1,
      items: {
        type: 'object',
        properties: {
          items: {
            title: 'Lista de sessões',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                __editorItemTitle: {
                  title: 'Titulo',
                  type: 'string',
                  description: 'Título que será exibido acima da sessão.'
                },

                items: {
                  type: 'array',
                  title: 'Lista de subsessão',
                  items: {
                    type: 'object',
                    properties: {
                      __editorItemTitle: {
                        title: 'Titulo',
                        type: 'string',
                        description: 'Título que será exibido na subsessão.'
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

    _screen_config_copyright: {
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
    }
  }
})
