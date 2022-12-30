"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questions = require('./questions');
const operations = require('./operations');
module.exports = (plop) => {
    plop.setGenerator('Gerador De Componentes', {
        description: 'Geração de componentes a partir dos templates, totalmente do 0 e com opções que vão se adequar as suas necessidades.',
        prompts: [
            questions.component.name,
            questions.component.options
        ],
        actions: function (data) {
            const actions = [];
            const { attributes } = data;
            const { add, modify } = operations;
            actions.push(add.component.default);
            actions.push(add.export.component);
            if (attributes.includes('haveCssFile')) {
                actions.push(add.styles.default);
                actions.push(add.component.styles);
            }
            if (attributes.includes('haveContext')) {
                actions.push(add.context.index);
                actions.push(add.context.mocks);
                actions.push(add.context.interfaces.context);
                actions.push(add.context.interfaces.schemas);
                actions.push(add.context.interfaces.index);
                actions.push(add.export.context);
                actions.push(modify.component.context.component.import);
                actions.push(modify.component.context.component.useHook);
                actions.push(modify.interface.component.context);
            }
            else {
                actions.push(modify.interface.component.default);
            }
            if (attributes.includes('havePage')) {
                actions.push(add.page.component);
                actions.push(modify.route.component);
            }
            if (attributes.includes('haveApiCall')) {
                actions.push(modify.component.callApi);
            }
            if (attributes.includes('useProductContext')) {
                actions.push(add.typings.vtexProductContext.declare);
                actions.push(modify.component.context.product.import);
                actions.push(modify.component.context.product.useHook);
            }
            attributes.includes('haveChildren') && actions.push(modify.interface.component.children);
            attributes.includes('haveProps') && actions.push(modify.component.props);
            return actions;
        }
    });
};
//# sourceMappingURL=index.js.map