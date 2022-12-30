"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    add: {
        page: {
            institutional: {
                device: {
                    desktop: {
                        type: 'add',
                        path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/page-desktop.json',
                        templateFile: 'templates/addpage/institutional/page-desktop.hbs'
                    },
                    mobile: {
                        type: 'add',
                        path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/page-mobile.json',
                        templateFile: 'templates/addpage/institutional/page-mobile.hbs'
                    }
                },
                container: {
                    type: 'add',
                    path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/container-page.json',
                    templateFile: 'templates/addpage/institutional/container-page.hbs'
                },
                menuLink: {
                    type: 'add',
                    path: '../store/blocks/pages/institutional/components/menu/components/links/{{dashCase name}}.json',
                    templateFile: 'templates/addpage/institutional/menu-link.hbs'
                },
                component: {
                    breadcrumb: {
                        type: 'add',
                        path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/components/breadcrumb.json',
                        templateFile: 'templates/addpage/institutional/components/breadcrumb.hbs'
                    },
                    texts: {
                        type: 'add',
                        path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/components/texts.json',
                        templateFile: 'templates/addpage/institutional/components/texts.hbs'
                    },
                    title: {
                        type: 'add',
                        path: '../store/blocks/pages/institutional/pages/{{dashCase name}}/components/title.json',
                        templateFile: 'templates/addpage/institutional/components/title.hbs'
                    }
                }
            },
            custom: {
                type: 'add',
                path: '../store/blocks/pages/custom/{{dashCase name}}/container-page.json',
                templateFile: 'templates/addpage/custom.hbs'
            }
        }
    },
    modify: {
        page: {
            institutional: {
                menu: {
                    desktop: {
                        path: '../store/blocks/pages/institutional/components/menu/container-menu-desktop.json',
                        pattern: /("vtex.*itens.*":[\s\S]*?children": \[)/,
                        templateFile: 'templates/modify/page/institutional/container-menu-desktop.hbs',
                        type: 'modify'
                    },
                    mobile: {
                        path: '../store/blocks/pages/institutional/components/menu/container-menu-mobile.json',
                        pattern: /("vtex.*itens.*":[\s\S]*?children": \[)/,
                        templateFile: 'templates/modify/page/institutional/container-menu-mobile.hbs',
                        type: 'modify'
                    }
                }
            }
        },
        route: {
            institutional: {
                path: '../store/routes.json',
                pattern: /(^\{)/,
                templateFile: 'templates/modify/route/institutional.hbs',
                type: 'modify'
            },
            custom: {
                path: '../store/routes.json',
                pattern: /(^\{)/,
                templateFile: 'templates/modify/route/custom.hbs',
                type: 'modify'
            }
        }
    }
};
//# sourceMappingURL=operations.js.map