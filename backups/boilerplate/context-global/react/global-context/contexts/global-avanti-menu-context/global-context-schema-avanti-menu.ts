import { SchemaObjectSiteEditor } from "../../cms-helper";


const buildAvantiMenuItem = () => {
  return {
    "dependencies": {
      "type": {
        "oneOf": [
          {
            "properties": {
              "type": {
                "enum": ["custom"]
              },
              "target": {
                "title": "admin/editor.avanti-menu-item.target.title",
                "type": "boolean",
                "default": false
              },
              "items": {
                "minItems": 0,
                "type": "array",
                "title": "admin/editor.avanti-menu-item.second.title",
                "items": buildAvantiSecondmenuItem()
              },
              "url": {
                "title": "admin/editor.avanti-menu-item.url.title",
                "type": "string"
              },
              "tagTitle": {
                "title": "admin/editor.avanti-menu-item.tagTitle.title",
                "type": "string"
              },
              "banner": {
                "title": "admin/editor.avanti-menu.banner.title",
                "type": "array",
                "maxItems": 1,
                "items": {
                  "title": "admin/editor.avanti-menu.banner.title",
                  "type": "object",
                  "properties": {
                    "src": {
                      "title": "admin/editor.avanti-menu.banner.title",
                      "type": "string",
                      "widget": {
                        "ui:widget": "image-uploader"
                      }
                    },
                    "link": {
                      "title": "admin/editor.avanti-menu.bannerLink.title",
                      "type": "string"
                    },
                    "target": {
                      "title": "admin/editor.avanti-menu-item.target.title",
                      "type": "boolean",
                      "default": false
                    }
                  }
                }
              },
              "menuBarIcon": {
                "title": "admin/editor.avanti-menu-item.menubarIcon.title",
                "type": "string",
                "default": null,
                "widget": {
                  "ui:widget": "image-uploader"
                }
              },
              "menuIconVisibleOnDesktop": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnDesktop.title",
                "type": "boolean",
                "default": false
              },
              "menuIconVisibleOnMobile": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnMobile.title",
                "type": "boolean",
                "default": false
              }
            }
          },
          {
            "properties": {
              "type": {
                "enum": ["category"]
              },
              "hasName": {
                "title": "admin/editor.avanti-menu-item.hasName.title",
                "type": "boolean",
                "default": false
              },
              "categoryId": {
                "title": "admin/editor.avanti-menu-item.type.categoryId.title",
                "type": "number"
              },
              "banner": {
                "title": "admin/editor.avanti-menu.banner.title",
                "type": "array",
                "maxItems": 1,
                "items": {
                  "title": "admin/editor.avanti-menu.banner.title",
                  "type": "object",
                  "properties": {
                    "src": {
                      "title": "admin/editor.avanti-menu.banner.title",
                      "type": "string",
                      "widget": {
                        "ui:widget": "image-uploader"
                      }
                    },
                    "link": {
                      "title": "admin/editor.avanti-menu.bannerLink.title",
                      "type": "string"
                    },
                    "target": {
                      "title": "admin/editor.avanti-menu-item.target.title",
                      "type": "boolean",
                      "default": false
                    }
                  }
                }
              },
              "menuBarIcon": {
                "title": "admin/editor.avanti-menu-item.menubarIcon.title",
                "type": "string",
                "default": null,
                "widget": {
                  "ui:widget": "image-uploader"
                }
              },
              "menuIconVisibleOnDesktop": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnDesktop.title",
                "type": "boolean",
                "default": false
              },
              "menuIconVisibleOnMobile": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnMobile.title",
                "type": "boolean",
                "default": false
              }
            }
          }
        ]
      }
    },
    "properties": {
      "__editorItemTitle": {
        "title": "admin/editor.avanti-menu-item.name.title",
        "type": "string",
        "default": "Item"
      },
      "type": {
        "title": "admin/editor.avanti-menu-item.type.category.title",
        "type": "string",
        "enum": ["custom", "category"],
        "default": "custom",
        "enumNames": [
          "admin/editor.avanti-menu-item.type.custom",
          "admin/editor.avanti-menu-item.type.category"
        ],
        "widget": {
          "ui:widget": "radio"
        }
      },
      "mobile": {
        "title": "admin/editor.avanti-menu-item.mobile.title",
        "type": "boolean",
        "default": true
      },
      "desktop": {
        "title": "admin/editor.avanti-menu-item.desktop.title",
        "type": "boolean",
        "default": true
      },
      "departmentBar": {
        "title": "admin/editor.avanti-menu-item.departmentbar.title",
        "type": "boolean",
        "default": true
      },
      "menuBar": {
        "title": "admin/editor.avanti-menu-item.menubar.title",
        "type": "boolean",
        "default": false
      },
      "onMouseHover": {
        "title": "admin/editor.avanti-menu-item.onMouseHover.title",
        "type": "boolean",
        "default": true
      },
      "highlightDesk": {
        "title": "admin/editor.avanti-menu-item.highlightDesk.title",
        "type": "boolean",
        "default": false
      },
      "highlightMob": {
        "title": "admin/editor.avanti-menu-item.highlightMob.title",
        "type": "boolean",
        "default": false
      },
      "seeAll": {
        "title": "admin/editor.avanti-menu-item.seeAll.title",
        "type": "boolean",
        "default": true
      },
      "color": {
        "title": "admin/editor.avanti-menu-item.color.title",
        "type": "string"
      }
    }
  }
}


const buildAvantiSecondmenuItem = () => {
  return {
    "dependencies": {
      "menuBarIconDef": {
        "oneOf": [
          {
            "properties": {
              "menuBarIconDef": {
                "enum": [true]
              },
              "menuBarIcon": {
                "title": "admin/editor.avanti-menu-item.menuSecondIcon.title",
                "type": "string",
                "default": null,
                "widget": {
                  "ui:widget": "image-uploader"
                }
              },
              "menuIconVisibleOnDesktop": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnDesktop.title",
                "type": "boolean",
                "default": false
              },
              "menuIconVisibleOnMobile": {
                "title": "admin/editor.avanti-menu-item.menuIconVisibleOnMobile.title",
                "type": "boolean",
                "default": false
              }
            }
          },
          {
            "properties": {
              "menuBarIconDef": {
                "enum": [false]
              }
            }
          }
        ]
      },
      "type": {
        "oneOf": [
          {
            "properties": {
              "type": {
                "enum": ["custom"]
              },

              "url": {
                "title": "admin/editor.avanti-menu-item.url.title",
                "type": "string"
              },
              "tagTitle": {
                "title": "admin/editor.avanti-menu-item.tagTitle.title",
                "type": "string"
              },
              "items": {
                "minItems": 0,
                "type": "array",
                "title": "admin/editor.avanti-menu-item.third.title",
                "items": buildAvantiThirdmenuItem()
              }
            }
          },
          {
            "properties": {
              "type": {
                "enum": ["category"]
              },
              "hasName": {
                "title": "admin/editor.avanti-menu-item.hasName.title",
                "type": "boolean",
                "default": false
              },
              "categoryId": {
                "title": "admin/editor.avanti-menu-item.type.categoryId.title",
                "type": "number"
              }
            }
          }
        ]
      }
    },
    "properties": {
      "__editorItemTitle": {
        "title": "admin/editor.avanti-menu-item.name.title",
        "type": "string",
        "default": "Item"
      },
      "type": {
        "title": "admin/editor.avanti-menu-item.type.category.title",
        "type": "string",
        "enum": ["custom", "category"],
        "default": "custom",
        "enumNames": [
          "admin/editor.avanti-menu-item.type.custom",
          "admin/editor.avanti-menu-item.type.category"
        ],
        "widget": {
          "ui:widget": "radio"
        }
      },
      "mobile": {
        "title": "admin/editor.avanti-menu-item.mobile.title",
        "type": "boolean",
        "default": true
      },
      "desktop": {
        "title": "admin/editor.avanti-menu-item.desktop.title",
        "type": "boolean",
        "default": true
      },
      "target": {
        "title": "admin/editor.avanti-menu-item.target.title",
        "type": "boolean",
        "default": false
      },
      "highlightDesk": {
        "title": "admin/editor.avanti-menu-item.highlightDesk.title",
        "type": "boolean",
        "default": false
      },
      "highlightMob": {
        "title": "admin/editor.avanti-menu-item.highlightMob.title",
        "type": "boolean",
        "default": false
      },
      "seeAll": {
        "title": "admin/editor.avanti-menu-item.seeAll.title",
        "type": "boolean",
        "default": true
      },
      "color": {
        "title": "admin/editor.avanti-menu-item.color.title",
        "type": "string"
      },
      "menuBarIconDef": {
        "title": "admin/editor.avanti-menu-item.menuIconDef.title",
        "type": "boolean",
        "default": true
      }
    }
  }
}
const buildAvantiThirdmenuItem = () => {
  return {
    "dependencies": {
      "menuBarIconDef": {
        "oneOf": [
          {
            "properties": {
              "menuBarIconDef": {
                "enum": [true]
              },
              "menuIcon": {
                "title": "admin/editor.avanti-menu-item.menuThirdIcon.title",
                "type": "string",
                "default": null,
                "widget": {
                  "ui:widget": "image-uploader"
                }
              }
            }
          },
          {
            "properties": {
              "menuBarIconDef": {
                "enum": [false]
              }
            }
          }
        ]
      }
    },
    "properties": {
      "__editorItemTitle": {
        "title": "admin/editor.avanti-menu-item.name.title",
        "type": "string",
        "default": "item"
      },
      "mobile": {
        "title": "admin/editor.avanti-menu-item.mobile.title",
        "type": "boolean",
        "default": true
      },
      "desktop": {
        "title": "admin/editor.avanti-menu-item.desktop.title",
        "type": "boolean",
        "default": true
      },
      "target": {
        "title": "admin/editor.avanti-menu-item.target.title",
        "type": "boolean",
        "default": false
      },
      "highlightDesk": {
        "title": "admin/editor.avanti-menu-item.highlightDesk.title",
        "type": "boolean",
        "default": false
      },
      "highlightMob": {
        "title": "admin/editor.avanti-menu-item.highlightMob.title",
        "type": "boolean",
        "default": false
      },
      "color": {
        "title": "admin/editor.avanti-menu-item.color.title",
        "type": "string"
      },
      "menuBarIconDef": {
        "title": "admin/editor.avanti-menu-item.menuIconDef.title",
        "type": "boolean",
        "default": true
      },
      "url": {
        "title": "admin/editor.avanti-menu-item.url.title",
        "type": "string"
      },
      "tagTitle": {
        "title": "admin/editor.avanti-menu-item.tagTitle.title",
        "type": "string"
      }
    }
  }
}

export const GlobalContextSchemaAvantiMenu = (): SchemaObjectSiteEditor => ({
  "type": "object",
  "properties": {
    "items": {
      "minItems": 0,
      "type": "array",
      "title": "admin/editor.avanti-menu-item.title",
      "items": buildAvantiMenuItem()
    }
  }
} as any)
