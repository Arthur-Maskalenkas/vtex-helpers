module.exports = {
  page: {
    name: {
      type: 'input',
      name: 'name',
      message: 'Qual o nome da pagina?'
    },

    options: {
      type: 'list',
      name: 'attributes',
      message: 'A sua pagina vai...',
      choices: [
        {
          name: 'Ser uma pagina institutional',
          value: 'thisPageIsInstitutional'
        },
        {
          name: 'Ser uma pagina custom',
          value: 'thisPageIsCustom'
        }
      ]
    }
  }
}