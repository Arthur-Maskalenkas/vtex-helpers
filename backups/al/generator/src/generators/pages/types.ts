export type GeneratorPagesOperations = {
  add: {
    page: {
      institutional: {
        container: Object
        menuLink: Object

        component: {
          breadcrumb: Object
          texts: Object
          title: Object
        }
      }
      custom: Object
    }
  }

  modify: {
    page: {
      institutional: {
        menu: {
          desktop: Object

          mobile: Object
        }
      }
    }

    route: {
      institutional: Object

      custom: Object
    }
  }
}

export type GeneratorPagesQuestions = {
  attributes: attributes[]
  name: string
}

type attributes = 'thisPageIsInstitutional' | 'thisPageIsCustom'