"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentGenerator = require('./generators/components/index');
const pagesGenerator = require('./generators/pages/index');
module.exports = function (plop) {
    plop.setWelcomeMessage('' +
        'Seja Bem Vindo(a)!\n' +
        'Selecione uma das opções para dar inicio ao processo!\n' +
        '');
    componentGenerator(plop);
};
//# sourceMappingURL=index.js.map