module.exports = {
  component: {
    name: {
      type: 'input',
      name: 'name',
      message: 'Nome Do Componente'
    },

    options: {
      type: 'checkbox',
      name: 'attributes',
      message: 'Extensões De Funcionalidade',
      choices: [
        {
          name: 'CSS',
          value: 'haveCssFile'
        },

        {
          name: 'Props',
          value: 'haveProps'
        },
        {
          name: 'Children',
          value: 'haveChildren'
        },
        {
          name: 'Contexto Próprio',
          value: 'haveContext'
        },
        {
          name: "Contexto De Produto",
          value: "useProductContext"
        },
        {
          name: "Chamada Api",
          value: "haveApiCall"
        },
        {
          name: 'Pagina Própria',
          value: 'havePage'
        }
      ]
    }
  }
}