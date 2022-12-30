import { GeneratorPagesOperations, GeneratorPagesQuestions } from './types'

const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Paginas', {
    description: 'Geração de paginas.',

    prompts: [
      questions.page.name,
      questions.page.options

    ],

    actions: function (data) {
      const actions = []

      console.log(data)

      const { attributes } = data as GeneratorPagesQuestions

      const { add, modify } = operations as GeneratorPagesOperations

      if (attributes.includes('thisPageIsInstitutional')) {
        actions.push(add.page.institutional.container)

        actions.push(add.page.institutional.component.breadcrumb)
        actions.push(add.page.institutional.component.title)
        actions.push(add.page.institutional.component.texts)

        actions.push(add.page.institutional.menuLink)

        actions.push(modify.page.institutional.menu.desktop)
        actions.push(modify.page.institutional.menu.mobile)

        actions.push(modify.route.institutional)
      }

      if (attributes.includes('thisPageIsCustom')) {
        actions.push(add.page.custom)
        actions.push(modify.route.custom)
      }

      return actions
    }
  })
}