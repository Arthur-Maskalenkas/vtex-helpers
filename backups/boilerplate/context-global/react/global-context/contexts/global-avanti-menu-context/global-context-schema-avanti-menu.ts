import { SchemaObjectSiteEditor } from "../../cms-helper";

const buildAvantiMenuMobileLinks = () => {
  return {
    "dependencies": {
      "iconDef": {
        "oneOf": [
          {
            "properties": {
              "iconDef": {
                "enum": [true]
              },
              "icon": {
                "title": "admin/editor.avanti-menu-mobile.links.icon.title",
                "type": "string",
                "widget": {
                  "ui:widget": "image-uploader"
                }
              }
            }
          },
          {
            "properties": {
              "iconDef": {
                "enum": [false]
              }
            }
          }
        ]
      },
      "itemsDef": {
        "oneOf": [
          {
            "properties": {
              "itemsDef": {
                "enum": [true]
              },
              "items": {
                "title": "admin/editor.avanti-menu-mobile.links.items.title",
                "type": "array",
                "items": buildAvantiMenuMobileSubLinks()
              }
            }
          },
          {
            "properties": {
              "itemsDef": {
                "enum": [false]
              }
            }
          }
        ]
      },
      "loginType": {
        "oneOf": [
          {
            "properties": {
              "loginType": {
                "enum": [true]
              },
              "myAcc": {
                "title": "admin/editor.avanti-menu-mobile.links.myAcc.title",
                "type": "string",
                "default": "Minha Conta"
              }
            }
          },
          {
            "properties": {
              "loginType": {
                "enum": [false]
              }
            }
          }
        ]
      }
    },
    "properties": {
      "__editorItemTitle": {
        "title": "admin/editor.avanti-menu-mobile.links.title",
        "type": "string",
        "default": "Link"
      },
      "url": {
        "title": "admin/editor.avanti-menu-mobile.links.url.title",
        "type": "string"
      },
      "itemsDef": {
        "title": "admin/editor.avanti-menu-mobile.links.itemsDef.title",
        "type": "boolean",
        "enum": [false]
      },
      "loginType": {
        "title": "admin/editor.avanti-menu-mobile.links.login.title",
        "type": "boolean",
        "enum": [false]
      },
      "iconDef": {
        "title": "admin/editor.avanti-menu-mobile.links.iconDef.title",
        "type": "boolean",
        "enum": [false]
      }
    }
  }
}

const buildAvantiMenuMobileSubLinks = () => {
  return {
    "dependencies": {
      "iconDef": {
        "oneOf": [
          {
            "properties": {
              "iconDef": {
                "enum": [true]
              },
              "icon": {
                "title": "admin/editor.avanti-menu-mobile.links.icon.title",
                "type": "string",
                "widget": {
                  "ui:widget": "image-uploader"
                }
              }
            }
          },
          {
            "properties": {
              "iconDef": {
                "enum": [false]
              }
            }
          }
        ]
      }
    },
    "properties": {
      "__editorItemTitle": {
        "title": "admin/editor.avanti-menu-mobile.links.title",
        "type": "string",
        "default": "Link"
      },
      "url": {
        "title": "admin/editor.avanti-menu-mobile.links.url.title",
        "type": "string"
      },
      "loginType": {
        "title": "admin/editor.avanti-menu-mobile.links.login.title",
        "type": "boolean",
        "enum": [false]
      },
      "iconDef": {
        "title": "admin/editor.avanti-menu-mobile.links.iconDef.title",
        "type": "boolean",
        "enum": [false]
      }
    }
  }
}

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
  properties: {
    _screen_config_visual_mobile: {
      type: 'array',
      title: 'Configurar aparencia do menu mobile',
      maxItems: 1,
      items: {
        type: 'object',
        "dependencies": {
          "secondDef": {
            "oneOf": [
              {
                "properties": {
                  "secondDef": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "secondMaxItems": {
                    "type": "number",
                    "title": "admin/editor.avanti-menu.second.title",
                    "description": "admin/editor.avanti-menu.second.desc"
                  }
                }
              },
              {
                "properties": {
                  "secondDef": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          },
          "thirdDef": {
            "oneOf": [
              {
                "properties": {
                  "thirdDef": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "thirdMaxItems": {
                    "type": "number",
                    "title": "admin/editor.avanti-menu.third.title",
                    "description": "admin/editor.avanti-menu.third.desc"
                  }
                }
              },
              {
                "properties": {
                  "thirdDef": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          }
        },
        "properties": {
          "menuType": {
            "title": "admin/editor.avanti-menu.menuType.title",
            "type": "string",
            "enum": ["theme1", "theme2", "theme3", "theme4", "theme5"],
            "enumNames": [
              "admin/editor.avanti-menu.menuType.style-01",
              "admin/editor.avanti-menu.menuType.style-02",
              "admin/editor.avanti-menu.menuType.style-03",
              "admin/editor.avanti-menu.menuType.style-04",
              "admin/editor.avanti-menu.menuType.style-05"
            ],
            "default": "theme1"
          },
          "burguerIcon": {
            "title": "admin/editor.avanti-menu-mobile.burguerIcon.title",
            "type": "string",
            "default": null,
            "widget": {
              "ui:widget": "image-uploader"
            }
          },
          "header": {
            "type": "object",
            "dependencies": {
              "logoutDef": {
                "oneOf": [
                  {
                    "properties": {
                      "logoutDef": {
                        "enum": [true]
                      },
                      "logoutLabel": {
                        "title": "admin/editor.avanti-menu-mobile.links.logoutLabel.title",
                        "type": "string"
                      }
                    }
                  },
                  {
                    "properties": {
                      "logoutDef": {
                        "enum": [false]
                      }
                    }
                  }
                ]
              }
            },
            "properties": {
              "title": {
                "title": "admin/editor.avanti-menu-mobile.menuTitle.title",
                "type": "string",
                "default": "Menu"
              },
              "closeIcon": {
                "title": "admin/editor.avanti-menu-mobile.closeIcon.title",
                "type": "string",
                "default": null,
                "widget": {
                  "ui:widget": "image-uploader"
                }
              },
              "items": {
                "title": "admin/editor.avanti-menu-mobile.linksHeader.title",
                "type": "array",
                "items": buildAvantiMenuMobileLinks()
              },
              "logoutDef": {
                "title": "admin/editor.avanti-menu-mobile.links.logoutDef.title",
                "type": "boolean",
                "enum": [false]
              }
            }
          },
          "footer": {
            "type": "object",
            "properties": {
              "items": {
                "title": "admin/editor.avanti-menu-mobile.linksFooter.title",
                "type": "array",
                "items": buildAvantiMenuMobileLinks()
              }
            }
          },
          "backButton": {
            "title": "admin/editor.avanti-menu-mobile.backButton.title",
            "description": "admin/editor.avanti-menu-mobile.backButton.desc",
            "type": "string",
            "default": "Voltar"
          },
          "seeAllButton": {
            "title": "admin/editor.avanti-menu-mobile.seeAllButton.title",
            "description": "admin/editor.avanti-menu-mobile.seeAllButton.desc",
            "type": "string",
            "default": "Ver Tudo"
          },
          "secondDef": {
            "title": "admin/editor.avanti-menu.secondDef.title",
            "type": "boolean"
          },
          "thirdDef": {
            "title": "admin/editor.avanti-menu.thirdDef.title",
            "type": "boolean"
          }
        }
      }
    },
    _screen_config_visual_desktop: {
      type: 'array',
      title: 'Configurar aparencia do menu desktop',
      maxItems: 1,
      items: {
        "type": "object",
        "dependencies": {
          "departmentDef": {
            "oneOf": [
              {
                "properties": {
                  "departmentDef": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "department": {
                    "type": "string",
                    "title": "admin/editor.avanti-menu.department.title"
                  },
                  "departmentIcon": {
                    "title": "admin/editor.avanti-menu.departmentIcon.title",
                    "type": "string",
                    "widget": {
                      "ui:widget": "image-uploader"
                    }
                  }
                }
              },
              {
                "properties": {
                  "departmentDef": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          },
          "banners": {
            "oneOf": [
              {
                "properties": {
                  "banners": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "bannerSize": {
                    "type": "object",
                    "properties": {
                      "width": {
                        "type": "string",
                        "title": "admin/editor.avanti-menu.banners.width.title"
                      },
                      "height": {
                        "type": "string",
                        "title": "admin/editor.avanti-menu.banners.height.title"
                      }
                    }
                  }
                }
              },
              {
                "properties": {
                  "banners": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          },
          "secondDef": {
            "oneOf": [
              {
                "properties": {
                  "secondDef": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "secondMaxItems": {
                    "type": "number",
                    "title": "admin/editor.avanti-menu.second.title",
                    "description": "admin/editor.avanti-menu.second.desc"
                  }
                }
              },
              {
                "properties": {
                  "secondDef": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          },
          "thirdDef": {
            "oneOf": [
              {
                "properties": {
                  "thirdDef": {
                    "type": "boolean",
                    "enum": [true]
                  },
                  "thirdMaxItems": {
                    "type": "number",
                    "title": "admin/editor.avanti-menu.third.title",
                    "description": "admin/editor.avanti-menu.third.desc"
                  }
                }
              },
              {
                "properties": {
                  "thirdDef": {
                    "type": "boolean",
                    "enum": [false]
                  }
                }
              }
            ]
          }
        },
        "properties": {
          "menuType": {
            "title": "admin/editor.avanti-menu.menuType.title",
            "type": "string",
            "enum": ["theme1", "theme2", "theme3", "theme4", "theme5"],
            "enumNames": [
              "admin/editor.avanti-menu.menuType.style-01",
              "admin/editor.avanti-menu.menuType.style-02",
              "admin/editor.avanti-menu.menuType.style-03",
              "admin/editor.avanti-menu.menuType.style-04",
              "admin/editor.avanti-menu.menuType.style-05"
            ],
            "default": "theme1"
          },
          "departmentDef": {
            "title": "admin/editor.avanti-menu.departmentDef.title",
            "type": "boolean"
          },
          "banners": {
            "title": "admin/editor.avanti-menu.banners.title",
            "type": "boolean"
          },
          "secondDef": {
            "title": "admin/editor.avanti-menu.secondDef.title",
            "type": "boolean"
          },
          "thirdDef": {
            "title": "admin/editor.avanti-menu.thirdDef.title",
            "type": "boolean"
          },
          "seeAllButton": {
            "title": "admin/editor.avanti-menu-mobile.seeAllButton.title",
            "type": "string",
            "default": "Ver Tudo"
          }
        }
      }
    },
    _screen_config_menu: {
      type: 'array',
      title: 'Configurar opções do menu',
      maxItems: 1,
      items: {
        "type": "object",
        "properties": {
          "items": {
            "minItems": 0,
            "type": "array",
            "title": "admin/editor.avanti-menu-item.title",
            "items": buildAvantiMenuItem()
          }
        }
      }
    }
  }
} as any)
