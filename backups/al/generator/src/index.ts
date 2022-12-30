import { NodePlopAPI } from 'plop'

const componentGenerator = require('./generators/components/index')
const pagesGenerator = require('./generators/pages/index')

module.exports = function (plop: NodePlopAPI) {
  plop.setWelcomeMessage('' +
    'Seja Bem Vindo(a)!\n' +
    'Selecione uma das opções para dar inicio ao processo!\n' +
    '')

  componentGenerator(plop)
}