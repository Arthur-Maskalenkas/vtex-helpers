import {
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_priorirty_config_container, schema_site_editor_default_quadrant_name,
  schema_site_editor_remapped_collection_flags,
  schema_site_editor_remapped_custom_flag, schema_site_editor_remapped_custom_quadrant,
  schema_site_editor_remapped_QuadrantStyles, schema_site_editor_remapped_root_custom_app_badge_custom
} from '../../../src/remap-schema/_interfaces'

export const mock_schema_remapped_priority_config_container = (): [schema_site_editor_default_priorirty_config_container] => {
  return [
    {
      prioritySystemOnQuadrant: "priorityByList",
      isInverted: false
    }
  ]
}

export const mock_schema_remapped_collection_flags = (): schema_site_editor_remapped_collection_flags => {
  return {
    typeContent: "createContent",
    styles: {
      __editorItemTitle: "Configurações",
      text: "id marca",
      fontWeight: "200",
      color: "#FFFFFF",
      backgroundColor: "#000000",
      commonPropsBetweenContentAndImage: {
        width: "unset",
        height: "unset"
      },
      borderRadius: "0px",
      commonStyles: {
        width: "unset",
        height: "unset"
      }
    } as any
  }
}

export const mock_schema_remapped_custom_flag_by_product_id = (productId: string | number, quadrant: 'quadrantTopLeft' | 'quadrantTopRight' | 'quadrantBottom'): schema_site_editor_remapped_custom_flag => {
  return {
    // HTMLAttributes: {
    //   "data-priority-value-0": true,
    //   "data-type-content-value-createcontent": true,
    //   "data-match-by-link-name-on-site-editor-id-produto": true,
    //   [`data-match-product-id-${26}`]: true
    // },

    badgesStyles: {
      text: "id marca",
      color: "#FFFFFF",
      fontWeight: "200",
      borderRadius: "0px",
      backgroundColor: "#000000",
      width: "unset",
      height: "unset",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      zIndex: 10
    },
    currentCollection: mock_schema_remapped_collection_flags(),
    priority: 0,
    quadrantOwner: quadrant
  }
}

// tornar generico
export const mock_schema_remapped_quadrant_top_right = (quadrantName: schema_site_editor_default_quadrant_name = 'quadrantTopRight'): schema_site_editor_remapped_custom_quadrant => {
  return {
    name: quadrantName,
    priorityConfigContainer: mock_schema_remapped_priority_config_container()[0],
    hasCollection: true,
    listOfFlags: [
      mock_schema_remapped_custom_flag_by_product_id(26, quadrantName)
    ],
    dataHTMLOnContainerFlag: {
      style: {
        right: "10px",
        top: "10px"
      }
    }
  }
}

export const mock_schema_remapped_root_app = (): schema_site_editor_remapped_root_custom_app_badge_custom => {
  return {
    quadrantBottom: {
      hasCollection: true,
      name: "QuadrantBottom",
      priorityConfigContainer: {
        prioritySystemOnQuadrant: "priorityByField",
        isInverted: false
      },
      dataHTMLOnContainerFlag: {
        style: {
          bottom: "10px",
          __editorItemTitle: "Configurações",
          horizontalDistance: "10px",
          positionFlow: "center",
          verticalDistance: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "row"
        }
      },
      listOfFlags: [
        {
          HTMLAttributes: {
            "data-priority-value-3": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-vinculacao-3-id-marca": true,
            "data-match-brand-id-2000000": true
          },
          badgesStyles: {
            text: "Vinculação 3",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "80px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 3,

          quadrantOwner: "quadrantBottom",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Vinculação 3",
              text: "Vinculação 3",
              fontSize: "13px",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              borderRadius: "0px",
              commonStyles: {
                width: "80px",
                height: "40px"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-vinculacao-1-id-produto": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "Vinculação 1",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "80px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,

          quadrantOwner: "quadrantBottom",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Vinculação 1",
              text: "Vinculação 1",
              fontSize: "13px",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              borderRadius: "0px",
              commonStyles: {
                width: "80px",
                height: "40px"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-vinculacao-2-id-catalogo": true,
            "data-match-category-id-54": true
          },
          badgesStyles: {
            text: "Vinculação 2",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "80px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,

          quadrantOwner: "quadrantBottom",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Vinculação 2",
              text: "Vinculação 2",
              fontSize: "13px",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              borderRadius: "0px",
              commonStyles: {
                width: "80px",
                height: "40px"
              }
            }
          }
        }
      ]
    },
    quadrantTopRight: {
      hasCollection: true,
      name: "QuadrantTopRight",
      priorityConfigContainer: {
        prioritySystemOnQuadrant: "priorityByList",
        isInverted: false
      },
      dataHTMLOnContainerFlag: {
        style: {
          right: "10px",
          top: "10px"
        }
      },
      listOfFlags: [
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-id-marca": true,
            "data-match-brand-id-2000000": true
          },
          badgesStyles: {
            text: "id marca",
            color: "#FFFFFF",
            fontWeight: "200",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "unset",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "id marca",
              fontWeight: "200",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              borderRadius: "0px",
              commonStyles: {
                width: "unset",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-ida-categoria": true,
            "data-match-category-id-54": true
          },
          badgesStyles: {
            text: "id categoria",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "id categoria",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-id-produto": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "id produto",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "id produto",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-colecao": true,
            "data-match-collection-id-143": true,
            "data-match-collection-id-147": true,
            "data-match-collection-id-139": true
          },
          badgesStyles: {
            text: "coleção 11",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "coleção 11",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-variacao-2": true,
            "data-match-variation-name-cor-value-vermelho": true
          },
          badgesStyles: {
            text: "variação 2",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "variação 2",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-0": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-campo-de-produto": true,
            "data-match-product-field-name-voltagem-value-220": true
          },
          badgesStyles: {
            text: "Campo De Produto",
            color: "#FFFFFF",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "#000000",
            width: "unset",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 0,
          quadrantOwner: "quadrantTopRight",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "Campo De Produto",
              fontWeight: "400",
              color: "#FFFFFF",
              backgroundColor: "#000000",

              commonStyles: {
                width: "unset",
                height: "unset"
              }
            }
          }
        }
      ]
    },
    quadrantTopLeft: {
      hasCollection: true,
      name: "QuadrantTopLeft",
      priorityConfigContainer: {
        prioritySystemOnQuadrant: "priorityByField",
        isInverted: false
      },
      dataHTMLOnContainerFlag: {
        style: {
          left: "10px",
          top: "10px"
        }
      },
      listOfFlags: [
        {
          HTMLAttributes: {
            "data-priority-value-4": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-item-4-prioridade-4": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "item 4 - prioridade 4",
            color: "white",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "black",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 4,
          quadrantOwner: "quadrantTopLeft",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "item 4 - prioridade 4",
              fontWeight: "400",
              color: "white",
              backgroundColor: "black",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-3": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-item-3-prioridade-3": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "item 3 - prioridade 3",
            color: "white",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "black",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 3,
          quadrantOwner: "quadrantTopLeft",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "item 3 - prioridade 3",
              fontWeight: "400",
              color: "white",
              backgroundColor: "black",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-2": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-item-2-prioridade-2": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "item 2 - prioridade 2",
            color: "white",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "black",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 2,
          quadrantOwner: "quadrantTopLeft",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "item 2 - prioridade 2",
              fontWeight: "400",
              color: "white",
              backgroundColor: "black",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-2": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-item-5-prioridade-2": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "item 5 - prioridade 2",
            color: "white",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "black",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 2,
          quadrantOwner: "quadrantTopLeft",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "item 5 - prioridade 2",
              fontWeight: "400",
              color: "white",
              backgroundColor: "black",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        },
        {
          HTMLAttributes: {
            "data-priority-value-1": true,
            "data-type-content-value-createcontent": true,
            "data-match-by-link-name-on-site-editor-item-1-prioridade-1": true,
            "data-match-product-id-26": true
          },
          badgesStyles: {
            text: "item 1 - prioridade 1",
            color: "white",
            fontWeight: "400",
            borderRadius: "0px",
            backgroundColor: "black",
            width: "20",
            height: "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10
          },
          priority: 1,
          quadrantOwner: "quadrantTopLeft",
          currentCollection: {
            typeContent: "createContent",
            styles: {
              __editorItemTitle: "Configurações",
              text: "item 1 - prioridade 1",
              fontWeight: "400",
              color: "white",
              backgroundColor: "black",

              commonStyles: {
                width: "20",
                height: "unset"
              }
            }
          }
        }
      ]
    }
  }
}