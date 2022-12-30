export type GeneratorComponentOperations = {
  add: {
    component: {
      default: Object
      styles: Object
    }

    styles: {
      default: Object
    }

    context: {
      index: Object
      mocks: Object
      interfaces: {
        context: Object
        schemas: Object
        index: Object
      }
    }

    export: {
      component: Object
      context: Object
    }

    page: {
      component: Object
    }

    typings: {
      vtexProductContext: {
        declare: Object
      }
    }
  }

  modify: {
    component: {
      callApi: Object
      props: Object

      context: {
        component: {
          import: Object
          useHook: Object
        }

        product: {
          import: Object
          useHook: Object
        }
      }
    }

    interface: {
      component: {
        default: Object
        children: Object
        context: Object
      }

      route: {
        component: Object
      }
    }

    route: {
      component: Object
    }
  }

}

export type GeneratorComponentQuestions = {
  attributes: attributes[]
  name: string
}

type attributes = 'haveCssFile' | 'haveProps' | 'haveChildren' | 'haveContext' | 'useProductContext' | 'haveApiCall' | 'havePage'