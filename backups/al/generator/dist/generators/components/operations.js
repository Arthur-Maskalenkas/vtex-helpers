"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    add: {
        component: {
            default: {
                type: 'add',
                path: '../../react/components/{{dashCase name}}/index.tsx',
                templateFile: 'templates/add/component/default.hbs'
            },
            styles: {
                type: 'add',
                path: '../../react/components/{{dashCase name}}/index.tsx',
                templateFile: 'templates/add/component/variation-style.hbs',
                force: true
            }
        },
        styles: {
            default: {
                type: 'add',
                path: '../../react/components/{{dashCase name}}/styles.css',
                templateFile: 'templates/add/styles/default.hbs'
            }
        },
        context: {
            index: {
                type: 'add',
                path: '../../react/components/{{dashCase name}}/context/index.tsx',
                templateFile: 'templates/add/context/context.hbs'
            },
            mocks: {
                type: 'add',
                path: '../../react/components/{{dashCase name}}/context/_mocks/mock-states.ts',
                templateFile: 'templates/add/context/_mocks/mock-states.hbs'
            },
            interfaces: {
                context: {
                    type: 'add',
                    path: '../../react/components/{{dashCase name}}/context/_interfaces/_context.ts',
                    templateFile: 'templates/add/context/_interfaces/_context.hbs'
                },
                schemas: {
                    type: 'add',
                    path: '../../react/components/{{dashCase name}}/context/_interfaces/_schemas.ts',
                    templateFile: 'templates/add/context/_interfaces/_schemas.hbs'
                },
                index: {
                    type: 'add',
                    path: '../../react/components/{{dashCase name}}/context/_interfaces/index.ts',
                    templateFile: 'templates/add/context/_interfaces/index.hbs'
                }
            }
        },
        export: {
            component: {
                type: 'add',
                path: '../../react/{{pascalCase name}}.tsx',
                templateFile: 'templates/add/export/component.hbs'
            },
            context: {
                type: 'add',
                path: '../../react/{{pascalCase name}}Provider.tsx',
                templateFile: 'templates/add/export/provider.hbs'
            }
        },
        page: {
            component: {
                type: 'add',
                path: '../../store/blocks/pages/app/{{dashCase name}}/container-page.json',
                templateFile: 'templates/add/page/component.hbs'
            }
        },
        typings: {
            vtexProductContext: {
                declare: {
                    type: 'add',
                    path: '../../react/typings/vtex.product-context.d.ts',
                    templateFile: 'templates/add/typings/vtex-product-context/declare.hbs',
                    skipIfExists: true
                }
            }
        }
    },
    modify: {
        component: {
            callApi: {
                path: '../../react/components/{{dashCase name}}/index.tsx',
                pattern: /(export const.*\(\).*\{)/,
                templateFile: 'templates/modify/component/call-api.hbs',
                type: 'modify'
            },
            props: {
                type: 'modify',
                path: '../../react/components/{{dashCase name}}/index.tsx',
                pattern: /(export const.*\(\).*\{)/,
                templateFile: 'templates/modify/component/props.hbs'
            },
            context: {
                component: {
                    import: {
                        type: 'modify',
                        path: '../../react/components/{{dashCase name}}/index.tsx',
                        pattern: /(import .* 'react')/,
                        templateFile: 'templates/modify/component/context/component/import.hbs'
                    },
                    useHook: {
                        type: 'modify',
                        path: '../../react/components/{{dashCase name}}/index.tsx',
                        pattern: /(export const.*\(\).*\{)/,
                        templateFile: 'templates/modify/component/context/component/use-hook.hbs'
                    }
                },
                product: {
                    import: {
                        type: 'modify',
                        path: '../../react/components/{{dashCase name}}/index.tsx',
                        pattern: /(import .* 'react')/,
                        templateFile: 'templates/modify/component/context/product/import.hbs'
                    },
                    useHook: {
                        type: 'modify',
                        path: '../../react/components/{{dashCase name}}/index.tsx',
                        pattern: /(export const.*\(\).*\{)/,
                        templateFile: 'templates/modify/component/context/product/use-hook.hbs'
                    }
                }
            }
        },
        interface: {
            component: {
                default: {
                    path: '../../store/interfaces.json',
                    pattern: /(^\{)/,
                    templateFile: 'templates/modify/interface/component/default.hbs',
                    type: 'modify'
                },
                children: {
                    path: '../../store/interfaces.json',
                    pattern: /(".*{?)/,
                    templateFile: 'templates/modify/interface/component/variation-children.hbs',
                    type: 'modify'
                },
                context: {
                    path: '../../store/interfaces.json',
                    pattern: /(^\{)/,
                    templateFile: 'templates/modify/interface/component/variation-context.hbs',
                    type: 'modify'
                }
            },
            route: {
                component: {
                    path: '../../store/routes.json',
                    pattern: /(^\{)/,
                    templateFile: 'templates/modify/route/component.hbs',
                    type: 'modify'
                }
            }
        },
        route: {
            component: {
                path: '../../store/routes.json',
                pattern: /(^\{)/,
                templateFile: 'templates/modify/route/component.hbs',
                type: 'modify'
            }
        }
    }
};
//# sourceMappingURL=operations.js.map